import { collection, doc, setDoc, getDoc, getDocs, query, orderBy, serverTimestamp, Timestamp, deleteDoc, where } from "firebase/firestore";
import { db, auth } from "../lib/firebase";
import { encryptObject, decryptObject } from "../utils/encryption";
import { EducationalContent, CommunityPost, CommunityComment } from "../types";
import { LOCAL_EDUCATIONAL_CONTENT } from "../educational_data";
import { handleFirestoreError, OperationType } from "../lib/firestoreUtils";

// Collection names
const USERS_COLLECTION = "usuarios";
const DIARIO_SUB = "diario_interativo";
const FINANCAS_SUB = "financas";
const GELADEIRA_SUB = "geladeira";
const CONTEUDO_EDUCATIVO_COLLECTION = "conteudo_educativo";
const COMMUNITY_COLLECTION = "community";

// CASULO COMMUNITY
export const createCommunityPost = async (postData: any) => {
  try {
    const communityRef = collection(db, COMMUNITY_COLLECTION);
    const newPostRef = doc(communityRef);
    await setDoc(newPostRef, {
      ...postData,
      id: newPostRef.id,
      createdAt: serverTimestamp(),
      likes: 0,
      likedBy: [],
      comments: 0,
      reported: false
    });
    return newPostRef.id;
  } catch (error) {
    handleFirestoreError(error, OperationType.CREATE, COMMUNITY_COLLECTION);
  }
};

// SOCIAL FEATURES

// Friend Requests
export const sendFriendRequest = async (fromId: string, fromName: string, fromPhoto: string | null, toId: string) => {
  try {
    const requestRef = doc(collection(db, USERS_COLLECTION, toId, "friendRequests"));
    await setDoc(requestRef, {
      id: requestRef.id,
      fromId,
      fromName,
      fromPhoto,
      toId,
      status: 'pending',
      createdAt: serverTimestamp()
    });
    
    // Create notification
    await createNotification({
      userId: toId,
      type: 'friend_request',
      fromId,
      fromName,
      relatedId: requestRef.id,
      read: false,
      createdAt: serverTimestamp()
    });
    
    return requestRef.id;
  } catch (error) {
    handleFirestoreError(error, OperationType.CREATE, `${USERS_COLLECTION}/${toId}/friendRequests`);
  }
};

export const acceptFriendRequest = async (userId: string, requestId: string, fromId: string, fromName: string) => {
  try {
    const requestRef = doc(db, USERS_COLLECTION, userId, "friendRequests", requestId);
    await setDoc(requestRef, { status: 'accepted' }, { merge: true });
    
    // Update accepting user's friend list
    const userRef = doc(db, USERS_COLLECTION, userId);
    const userSnap = await getDoc(userRef);
    
    if (userSnap.exists()) {
      const friends = userSnap.data().friends || [];
      if (!friends.includes(fromId)) friends.push(fromId);
      await setDoc(userRef, { friends }, { merge: true });
    } else {
      await setDoc(userRef, { friends: [fromId] }, { merge: true });
    }
    
    // Create notification for the sender so they know they were accepted
    const userProfile = await getUserProfile(userId);
    await createNotification({
      userId: fromId,
      type: 'friend_accept',
      fromId: userId,
      fromName: userProfile?.communityName || userProfile?.name || "Alguém",
      relatedId: requestId,
      read: false,
      createdAt: serverTimestamp()
    });
    
  } catch (error) {
    handleFirestoreError(error, OperationType.UPDATE, `${USERS_COLLECTION}/${userId}/friendRequests/${requestId}`);
  }
};

export const declineFriendRequest = async (userId: string, requestId: string) => {
  try {
    const requestRef = doc(db, USERS_COLLECTION, userId, "friendRequests", requestId);
    await setDoc(requestRef, { status: 'declined' }, { merge: true });
  } catch (error) {
    handleFirestoreError(error, OperationType.UPDATE, `${USERS_COLLECTION}/${userId}/friendRequests/${requestId}`);
  }
};

// Chats
export const getOrCreateChat = async (participants: string[]) => {
  try {
    const chatsRef = collection(db, "chats");
    const q = query(chatsRef, where("participants", "array-contains", participants[0]));
    const querySnapshot = await getDocs(q);
    
    let existingChat = querySnapshot.docs.find(doc => {
      const data = doc.data();
      return data.participants.includes(participants[1]) && data.participants.length === 2;
    });
    
    if (existingChat) {
      return { id: existingChat.id, ...existingChat.data() };
    }
    
    const newChatRef = doc(chatsRef);
    const chatData = {
      id: newChatRef.id,
      participants,
      unreadCount: participants.reduce((acc, id) => ({ ...acc, [id]: 0 }), {}),
      createdAt: serverTimestamp()
    };
    await setDoc(newChatRef, chatData);
    return chatData;
  } catch (error) {
    handleFirestoreError(error, OperationType.WRITE, "chats");
  }
};

export const sendMessage = async (chatId: string, senderId: string, content: string) => {
  try {
    const messagesRef = collection(db, "chats", chatId, "messages");
    const newMessageRef = doc(messagesRef);
    const messageData = {
      id: newMessageRef.id,
      senderId,
      content,
      timestamp: serverTimestamp(),
      status: 'sent'
    };
    await setDoc(newMessageRef, messageData);
    
    // Update chat metadata
    const chatRef = doc(db, "chats", chatId);
    const chatSnap = await getDoc(chatRef);
    if (chatSnap.exists()) {
      const data = chatSnap.data();
      const unreadCount = data.unreadCount || {};
      data.participants.forEach((pId: string) => {
        if (pId !== senderId) {
          unreadCount[pId] = (unreadCount[pId] || 0) + 1;
        }
      });
      await setDoc(chatRef, {
        lastMessage: content,
        lastMessageTime: serverTimestamp(),
        unreadCount
      }, { merge: true });
    }
    
    return newMessageRef.id;
  } catch (error) {
    handleFirestoreError(error, OperationType.CREATE, `chats/${chatId}/messages`);
  }
};

// Notifications
export const createNotification = async (notifData: any) => {
  try {
    const notifRef = doc(collection(db, "notifications"));
    await setDoc(notifRef, {
      ...notifData,
      id: notifRef.id,
      createdAt: serverTimestamp()
    });
    return notifRef.id;
  } catch (error) {
    handleFirestoreError(error, OperationType.CREATE, "notifications");
  }
};

export const markNotificationAsRead = async (notifId: string) => {
  try {
    const notifRef = doc(db, "notifications", notifId);
    await setDoc(notifRef, { read: true }, { merge: true });
  } catch (error) {
    handleFirestoreError(error, OperationType.UPDATE, `notifications/${notifId}`);
  }
};

// Presence
export const updatePresence = async (userId: string, isOnline: boolean, hideStatus: boolean = false) => {
  try {
    const userRef = doc(db, USERS_COLLECTION, userId);
    await setDoc(userRef, {
      presence: {
        isOnline,
        lastSeen: serverTimestamp(),
        hideStatus
      }
    }, { merge: true });
  } catch (error) {
    handleFirestoreError(error, OperationType.UPDATE, `${USERS_COLLECTION}/${userId}`);
  }
};

export const getCommunityPosts = async (type: string, sortBy: 'createdAt' | 'likes' = 'createdAt') => {
  try {
    const communityRef = collection(db, COMMUNITY_COLLECTION);
    const q = query(
      communityRef,
      where("type", "==", type),
      where("reported", "==", false)
    );
    const querySnapshot = await getDocs(q);
    const posts = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id } as CommunityPost));
    
    // Client-side sorting
    return posts.sort((a, b) => {
      const valA = a[sortBy];
      const valB = b[sortBy];
      
      // Handle Firestore timestamps
      const timeA = valA && typeof valA === 'object' && 'seconds' in valA ? valA.seconds : (valA instanceof Date ? valA.getTime() : valA);
      const timeB = valB && typeof valB === 'object' && 'seconds' in valB ? valB.seconds : (valB instanceof Date ? valB.getTime() : valB);
      
      if (timeA < timeB) return 1;
      if (timeA > timeB) return -1;
      return 0;
    });
  } catch (error) {
    handleFirestoreError(error, OperationType.LIST, COMMUNITY_COLLECTION);
    return [];
  }
};

export const likePost = async (postId: string, userId: string, isLiking: boolean) => {
  try {
    const postRef = doc(db, COMMUNITY_COLLECTION, postId);
    const postSnap = await getDoc(postRef);
    if (!postSnap.exists()) return;
    
    const data = postSnap.data();
    let likedBy = data.likedBy || [];
    if (isLiking) {
      if (!likedBy.includes(userId)) likedBy.push(userId);
    } else {
      likedBy = likedBy.filter((id: string) => id !== userId);
    }
    
    await setDoc(postRef, {
      likedBy,
      likes: likedBy.length
    }, { merge: true });

    // Create notification if liking
    if (isLiking && data.authorId !== userId) {
      const userProfile = await getUserProfile(userId);
      await createNotification({
        userId: data.authorId,
        type: 'like',
        fromId: userId,
        fromName: userProfile?.name || "Alguém",
        relatedId: postId,
        read: false,
        createdAt: serverTimestamp()
      });
    }
  } catch (error) {
    handleFirestoreError(error, OperationType.UPDATE, `${COMMUNITY_COLLECTION}/${postId}`);
  }
};

export const addComment = async (postId: string, commentData: any) => {
  try {
    const postRef = doc(db, COMMUNITY_COLLECTION, postId);
    const commentsRef = collection(postRef, "comments");
    const newCommentRef = doc(commentsRef);
    
    await setDoc(newCommentRef, {
      ...commentData,
      id: newCommentRef.id,
      createdAt: serverTimestamp()
    });
    
    const postSnap = await getDoc(postRef);
    if (postSnap.exists()) {
      const postData = postSnap.data();
      await setDoc(postRef, {
        comments: (postData.comments || 0) + 1
      }, { merge: true });

      // Create notification
      if (postData.authorId !== commentData.authorId) {
        await createNotification({
          userId: postData.authorId,
          type: 'comment',
          fromId: commentData.authorId,
          fromName: commentData.authorName,
          relatedId: postId,
          read: false,
          createdAt: serverTimestamp()
        });
      }
    }
  } catch (error) {
    handleFirestoreError(error, OperationType.CREATE, `${COMMUNITY_COLLECTION}/${postId}/comments`);
  }
};

export const getComments = async (postId: string) => {
  try {
    const commentsRef = collection(db, COMMUNITY_COLLECTION, postId, "comments");
    const q = query(commentsRef, orderBy("createdAt", "asc"));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id } as CommunityComment));
  } catch (error) {
    handleFirestoreError(error, OperationType.LIST, `${COMMUNITY_COLLECTION}/${postId}/comments`);
    return [];
  }
};

export const reportPost = async (postId: string) => {
  try {
    const postRef = doc(db, COMMUNITY_COLLECTION, postId);
    await setDoc(postRef, { reported: true }, { merge: true });
  } catch (error) {
    handleFirestoreError(error, OperationType.UPDATE, `${COMMUNITY_COLLECTION}/${postId}`);
  }
};

export const deleteCommunityPost = async (postId: string) => {
  try {
    const postRef = doc(db, COMMUNITY_COLLECTION, postId);
    await deleteDoc(postRef);
  } catch (error) {
    handleFirestoreError(error, OperationType.DELETE, `${COMMUNITY_COLLECTION}/${postId}`);
  }
};

export const updateCommunityPost = async (postId: string, data: Partial<CommunityPost>) => {
  try {
    const postRef = doc(db, COMMUNITY_COLLECTION, postId);
    await setDoc(postRef, { ...data, updatedAt: serverTimestamp() }, { merge: true });
  } catch (error) {
    handleFirestoreError(error, OperationType.UPDATE, `${COMMUNITY_COLLECTION}/${postId}`);
  }
};

// Generic function to save data to a subcollection
export const saveToSubcollection = async (userId: string, sub: string, data: any, docId?: string, encrypt: boolean = false) => {
  try {
    const userRef = doc(db, USERS_COLLECTION, userId);
    const subRef = collection(userRef, sub);
    const finalDocId = docId || Date.now().toString();
    const finalRef = doc(subRef, finalDocId);

    const dataToSave = {
      ...data,
      timestamp: serverTimestamp(),
      updatedAt: serverTimestamp(),
    };

    const processedData = encrypt ? encryptObject(dataToSave) : dataToSave;
    await setDoc(finalRef, processedData, { merge: true });
    return finalDocId;
  } catch (error) {
    handleFirestoreError(error, OperationType.WRITE, `${USERS_COLLECTION}/${userId}/${sub}`);
    throw error;
  }
};

// Generic function to get all data from a subcollection
export const getFromSubcollection = async (userId: string, sub: string, decrypt: boolean = false) => {
  try {
    const userRef = doc(db, USERS_COLLECTION, userId);
    const subRef = collection(userRef, sub);
    const q = query(subRef, orderBy("timestamp", "desc"));
    const querySnapshot = await getDocs(q);
    
    return querySnapshot.docs.map(doc => {
      const data = doc.data();
      const processedData = decrypt ? decryptObject(data) : data;
      return { id: doc.id, ...processedData };
    });
  } catch (error) {
    handleFirestoreError(error, OperationType.LIST, `${USERS_COLLECTION}/${userId}/${sub}`);
    return [];
  }
};

// Educational Content
export const getEducationalContent = async (years: number): Promise<EducationalContent | null> => {
  try {
    const contentRef = collection(db, CONTEUDO_EDUCATIVO_COLLECTION);
    const q = query(
      contentRef, 
      where("minYears", "<=", years)
    );
    const querySnapshot = await getDocs(q);
    
    let match = null;
    if (!querySnapshot.empty) {
      match = querySnapshot.docs.find(doc => {
        const data = doc.data();
        return data.maxYears > years;
      });
    }

    if (match) {
      return { id: match.id, ...match.data() } as EducationalContent;
    }

    // Fallback to local data if no match in Firebase or if Firebase is empty
    const localMatch = LOCAL_EDUCATIONAL_CONTENT.find(c => c.minYears <= years && (c.maxYears === undefined || c.maxYears > years));
    return localMatch || null;

  } catch (error) {
    console.warn("Firebase permission error or network issue. Falling back to local educational content.", error);
    
    // Direct fallback on error (e.g., Missing or insufficient permissions)
    const localMatch = LOCAL_EDUCATIONAL_CONTENT.find(c => c.minYears <= years && (c.maxYears === undefined || c.maxYears > years));
    return localMatch || null;
  }
};

// Specific functions for the requested subcollections
export const saveDiarioEntry = (userId: string, data: any, date: string) => 
  saveToSubcollection(userId, DIARIO_SUB, data, date, true); // Health data is sensitive

export const getDiarioEntries = (userId: string) => 
  getFromSubcollection(userId, DIARIO_SUB, true);

export const saveFinancaEntry = (userId: string, data: any) => 
  saveToSubcollection(userId, FINANCAS_SUB, data, undefined, true); // Finance data is sensitive

export const getFinancaEntries = (userId: string) => 
  getFromSubcollection(userId, FINANCAS_SUB, true);

export const saveGeladeiraItem = (userId: string, data: any, itemId: string) => 
  saveToSubcollection(userId, GELADEIRA_SUB, data, itemId);

export const getGeladeiraItems = (userId: string) => 
  getFromSubcollection(userId, GELADEIRA_SUB);

// Profile management
export const getUserProfile = async (userId: string) => {
  const userRef = doc(db, USERS_COLLECTION, userId);
  try {
    const docSnap = await getDoc(userRef);
    return docSnap.exists() ? docSnap.data() : null;
  } catch (error) {
    handleFirestoreError(error, OperationType.GET, `${USERS_COLLECTION}/${userId}`);
  }
};

export const saveUserProfile = async (userId: string, data: any) => {
  const userRef = doc(db, USERS_COLLECTION, userId);
  try {
    await setDoc(userRef, { ...data, updatedAt: serverTimestamp() }, { merge: true });
  } catch (error) {
    handleFirestoreError(error, OperationType.WRITE, `${USERS_COLLECTION}/${userId}`);
  }
};

// Export and Delete for compliance
export const deleteUserData = async (userId: string) => {
  try {
    const userRef = doc(db, USERS_COLLECTION, userId);
    
    // Recursively delete subcollections (Note: Firestore doesn't support recursive delete out of the box for client SDK)
    // For a real app, this should be a Cloud Function. For now, we'll delete what we can.
    const subs = [DIARIO_SUB, FINANCAS_SUB, GELADEIRA_SUB];
    for (const sub of subs) {
      const subRef = collection(userRef, sub);
      const snapshot = await getDocs(subRef);
      for (const d of snapshot.docs) {
        await deleteDoc(d.ref);
      }
    }
    await deleteDoc(userRef);
  } catch (error) {
    handleFirestoreError(error, OperationType.DELETE, `${USERS_COLLECTION}/${userId}`);
  }
};

export const exportUserData = async (userId: string) => {
  try {
    const data: any = { userId, exportedAt: new Date().toISOString() };
    const subs = [DIARIO_SUB, FINANCAS_SUB, GELADEIRA_SUB];
    for (const sub of subs) {
      data[sub] = await getFromSubcollection(userId, sub, sub === DIARIO_SUB || sub === FINANCAS_SUB);
    }
    return JSON.stringify(data, null, 2);
  } catch (error) {
    console.error("Error exporting user data:", error);
    return JSON.stringify({ error: "Failed to export data" });
  }
};
