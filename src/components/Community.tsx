
// CASULO COMMUNITY
import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, 
  MessageCircle, 
  Heart, 
  Plus, 
  Camera, 
  Send, 
  MoreVertical, 
  Flag,
  Image as ImageIcon,
  X,
  ChevronRight,
  Lightbulb,
  HelpCircle,
  Camera as CameraIcon,
  Edit2,
  Trash2,
  Bell,
  UserPlus,
  Search,
  Check,
  UserX,
  Clock,
  Circle
} from 'lucide-react';
import { 
  playICQMessage, 
  playICQDoorOpen, 
  playICQDoorClose, 
  playTypewriterKey,
  playICQStartup
} from '../sounds';
import { 
  createCommunityPost,
  likePost,
  addComment,
  reportPost,
  deleteCommunityPost,
  updateCommunityPost,
  sendFriendRequest,
  acceptFriendRequest,
  declineFriendRequest,
  getOrCreateChat,
  sendMessage,
  markNotificationAsRead,
  updatePresence,
  getUserProfile
} from '../services/firebaseService';
import { handleFirestoreError, OperationType } from '../lib/firestoreUtils';
import { auth, db } from '../lib/firebase';
import { collection, query, where, onSnapshot, orderBy, limit, doc, getDocs, getDoc, documentId } from 'firebase/firestore';
import { Camera as CapacitorCamera, CameraResultType } from '@capacitor/camera';
import { CommunityPost, CommunityComment, ChildProfile, FriendRequest, Notification, Chat, ChatMessage } from '../types';
import { processImageForUpload } from '../services/imageService';
import { Typewriter } from './Typewriter';

interface CommunityProps {
  profile: ChildProfile;
  onUpdateProfile: (updated: Partial<ChildProfile>) => void;
}

const Community: React.FC<CommunityProps> = ({ profile, onUpdateProfile }) => {
  const [activeTab, setActiveTab] = useState<'question' | 'moment' | 'tip'>('question');
  const [selectedPhase, setSelectedPhase] = useState<string>('all');
  const [posts, setPosts] = useState<CommunityPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [showNewPost, setShowNewPost] = useState(false);
  const [selectedPost, setSelectedPost] = useState<CommunityPost | null>(null);
  const [comments, setComments] = useState<CommunityComment[]>([]);
  const [newComment, setNewComment] = useState('');
  
  // New Post State
  const [postType, setPostType] = useState<'question' | 'moment' | 'tip'>('question');
  const [postContent, setPostContent] = useState('');
  const [postImage, setPostImage] = useState<string | null>(null);
  const [isPublishing, setIsPublishing] = useState(false);
  const [activeMenuPostId, setActiveMenuPostId] = useState<string | null>(null);
  const [editingPost, setEditingPost] = useState<CommunityPost | null>(null);

  // Estado para nome da comunidade
  const [communityName, setCommunityName] = useState(
    profile.communityName || profile.name || 'Anônimo'
  );
  const [isEditingName, setIsEditingName] = useState(false);
  const [parentPhoto, setParentPhoto] = useState<string | null>(profile.parentPhoto || null);
  const [parentPhotoPrivacy, setParentPhotoPrivacy] = useState<'public' | 'hidden'>(profile.parentPhotoPrivacy || 'public');
  const [parentNamePrivacy, setParentNamePrivacy] = useState<'public' | 'hidden'>(profile.parentNamePrivacy || 'public');
  const [parentRole, setParentRole] = useState<'mother' | 'father'>(profile.parentRole || 'mother');
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null);
  const initialLoadRef = React.useRef(true);
  const lastPostIdsRef = React.useRef<Set<string>>(new Set());
  const lastCommentIdsRef = React.useRef<Set<string>>(new Set());

  const userId = auth.currentUser?.uid;
  const userEmail = auth.currentUser?.email;
  const isAdmin = userEmail === 'regpecas@gmail.com';

  // Social State
  const [activeView, setActiveView] = useState<'feed' | 'friends' | 'chat' | 'notifications'>('feed');
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [friendRequests, setFriendRequests] = useState<FriendRequest[]>([]);
  const [chats, setChats] = useState<Chat[]>([]);
  const [activeChat, setActiveChat] = useState<Chat | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<ChildProfile[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [unreadNotificationsCount, setUnreadNotificationsCount] = useState(0);
  const [unreadMessagesCount, setUnreadMessagesCount] = useState(0);
  const [friendsProfiles, setFriendsProfiles] = useState<ChildProfile[]>([]);
  const [allMembers, setAllMembers] = useState<ChildProfile[]>([]);
  const [isLoadingMembers, setIsLoadingMembers] = useState(false);
  const [sentRequestTargetIds, setSentRequestTargetIds] = useState<string[]>([]);

  // Presence logic
  useEffect(() => {
    if (!userId) return;
    
    const safeUpdatePresence = async (status: boolean) => {
      try {
        await updatePresence(userId, status);
      } catch (e) {
        console.warn("Presence update failed:", e);
      }
    };

    safeUpdatePresence(true);
    
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        safeUpdatePresence(true);
      } else {
        safeUpdatePresence(false);
      }
    };

    window.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      window.removeEventListener('visibilitychange', handleVisibilityChange);
      safeUpdatePresence(false);
    };
  }, [userId]);

  // Load All Community Members for Discovery
  useEffect(() => {
    if (!userId) return;
    setIsLoadingMembers(true);
    const q = query(collection(db, 'usuarios'), limit(50));
    getDocs(q)
      .then(snap => {
        const members = snap.docs
          .map(d => ({ ...(d.data() as any), id: d.id } as ChildProfile))
          .filter(u => u.id !== userId);
        setAllMembers(members);
      })
      .catch(err => {
        console.warn("Membros da comunidade não disponíveis offline:", err?.message || err);
        setAllMembers([]);
      })
      .finally(() => setIsLoadingMembers(false));
  }, [userId]);

  // Friends Profiles Listener
  useEffect(() => {
    if (!userId || !profile.friends || profile.friends.length === 0) {
      setFriendsProfiles([]);
      return;
    }

    // Firestore 'in' query supports up to 30 IDs.
    const friendIds = profile.friends.slice(0, 30);
    const q = query(
      collection(db, 'usuarios'),
      where(documentId(), 'in', friendIds)
    );

    return onSnapshot(q, (snapshot) => {
      const fetched = snapshot.docs.map(doc => ({ ...(doc.data() as any), id: doc.id } as ChildProfile));
      setFriendsProfiles(fetched);
    }, (error) => {
      console.warn("Lista de amigos não sincronizada:", error?.message || error);
    });
  }, [userId, profile.friends]);

  // Notifications Listener
  useEffect(() => {
    if (!userId) return;
    const q = query(
      collection(db, 'notifications'),
      where('userId', '==', userId),
      orderBy('createdAt', 'desc'),
      limit(50)
    );
    return onSnapshot(q, (snapshot) => {
      const fetched = snapshot.docs.map(doc => ({ ...(doc.data() as any), id: doc.id } as Notification));
      setNotifications(fetched);
      setUnreadNotificationsCount(fetched.filter(n => !n.read).length);
      
      // Play sound for new notifications
      if (!initialLoadRef.current) {
        snapshot.docChanges().forEach(change => {
          if (change.type === 'added') {
            playICQMessage();
          }
        });
      }
    }, (error) => {
      console.warn("Notificações em tempo real desativadas:", error?.message || error);
      setNotifications([]);
    });
  }, [userId]);

  // Friend Requests Listener
  useEffect(() => {
    if (!userId) return;
    const q = query(
      collection(db, 'usuarios', userId, 'friendRequests'),
      where('status', '==', 'pending')
    );
    return onSnapshot(q, (snapshot) => {
      setFriendRequests(snapshot.docs.map(doc => ({ ...(doc.data() as any), id: doc.id } as FriendRequest)));
    }, (error) => {
      console.warn("Solicitações de amizade não carregadas:", error?.message || error);
      setFriendRequests([]);
    });
  }, [userId]);

  // Chats Listener
  useEffect(() => {
    if (!userId) return;
    const q = query(
      collection(db, 'chats'),
      where('participants', 'array-contains', userId),
      orderBy('lastMessageAt', 'desc')
    );
    return onSnapshot(q, (snapshot) => {
      const fetched = snapshot.docs.map(doc => ({ ...(doc.data() as any), id: doc.id } as Chat));
      setChats(fetched);
      
      let unread = 0;
      fetched.forEach(chat => {
        unread += (chat.unreadCount?.[userId] || 0);
      });
      setUnreadMessagesCount(unread);
    }, (error) => {
      console.warn("Chats em tempo real não carregados:", error?.message || error);
      setChats([]);
    });
  }, [userId]);

  const onlineFriends = useMemo(() => friendsProfiles.filter(f => f.presence?.isOnline), [friendsProfiles]);
  const offlineFriends = useMemo(() => friendsProfiles.filter(f => !f.presence?.isOnline), [friendsProfiles]);

  // Messages Listener
  useEffect(() => {
    if (!activeChat) {
      setMessages([]);
      return;
    }
    const q = query(
      collection(db, 'chats', activeChat.id, 'messages'),
      orderBy('createdAt', 'asc'),
      limit(100)
    );
    return onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs.map(doc => ({ ...(doc.data() as any), id: doc.id } as ChatMessage)));
    }, (error) => {
      console.warn("Mensagens do chat não carregadas:", error?.message || error);
      setMessages([]);
    });
  }, [activeChat]);

  // Search Users
  const handleSearch = async (val: string) => {
    setSearchQuery(val);
    if (!val.trim()) {
      setSearchResults([]);
      return;
    }
    setIsSearching(true);
    try {
      const valLower = val.toLowerCase().trim();
      // Search across all loaded members or fetch recent usuarios
      let candidateList = allMembers;
      if (candidateList.length === 0) {
        const snap = await getDocs(query(collection(db, 'usuarios'), limit(50)));
        candidateList = snap.docs
          .map(doc => ({ ...(doc.data() as any), id: doc.id } as ChildProfile))
          .filter(u => u.id !== userId);
        setAllMembers(candidateList);
      }

      const filtered = candidateList.filter(u => {
        if (u.id === userId) return false;
        const cName = (u.communityName || '').toLowerCase();
        const name = (u.name || '').toLowerCase();
        const email = (u.email || '').toLowerCase();
        return cName.includes(valLower) || name.includes(valLower) || email.includes(valLower);
      });

      setSearchResults(filtered);
    } catch (error: any) {
      console.warn("Busca por comunidade não concluída:", error?.message || error);
      setSearchResults([]);
    } finally {
      setIsSearching(false);
    }
  };

  const handleSendFriendRequest = async (targetId: string, targetName: string) => {
    if (!userId || targetId === userId) return;
    try {
      setSentRequestTargetIds(prev => [...prev, targetId]);
      await sendFriendRequest(userId, communityName || profile.name || 'Membro', parentPhoto, targetId);
    } catch (error) {
      console.error("Error sending friend request:", error);
    }
  };

  const handleAcceptFriendRequest = async (request: FriendRequest) => {
    if (!userId) return;
    try {
      await acceptFriendRequest(userId, request.id, request.fromId, request.fromName);
      const currentFriends = profile.friends || [];
      if (!currentFriends.includes(request.fromId)) {
        onUpdateProfile({ friends: [...currentFriends, request.fromId] });
      }
      playICQStartup();
    } catch (error) {
      console.error("Error accepting friend request:", error);
    }
  };

  const handleDeclineFriendRequest = async (requestId: string) => {
    if (!userId) return;
    try {
      await declineFriendRequest(userId, requestId);
    } catch (error) {
      console.error("Error declining friend request:", error);
    }
  };

  const handleOpenChat = async (targetId: string) => {
    if (!userId) return;
    try {
      const chat = await getOrCreateChat([userId, targetId]);
      setActiveChat(chat);
      setActiveView('chat');
    } catch (error) {
      console.error("Error opening chat:", error);
    }
  };

  const handleSendMessage = async () => {
    if (!userId || !activeChat || !newMessage.trim()) return;
    try {
      await sendMessage(activeChat.id, userId, newMessage.trim());
      setNewMessage('');
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  const handleMarkNotificationRead = async (notificationId: string) => {
    try {
      await markNotificationAsRead(notificationId);
    } catch (error) {
      console.error("Error marking notification as read:", error);
    }
  };

  // Door sounds on mount/unmount
  useEffect(() => {
    playICQDoorOpen();
    return () => playICQDoorClose();
  }, []);

  // Salvar Perfil Completo
  const handleSaveProfile = async () => {
    if (!communityName.trim()) return;
    try {
      await onUpdateProfile({ 
        communityName: communityName.trim(),
        parentPhoto,
        parentPhotoPrivacy,
        parentNamePrivacy,
        parentRole
      });
      setIsEditingName(false);
    } catch (error) {
      console.error("Erro ao salvar perfil da comunidade:", error);
    }
  };

  const takeParentPhoto = async () => {
    try {
      const image = await CapacitorCamera.getPhoto({
        quality: 50,
        allowEditing: true,
        resultType: CameraResultType.Base64
      });
      if (image.base64String) {
        const optimized = await processImageForUpload(`data:image/jpeg;base64,${image.base64String}`);
        setParentPhoto(optimized);
      }
    } catch (error: any) {
      if (error.message !== 'User cancelled photos app') {
        console.error("Error taking parent photo:", error);
      }
    }
  };

  // Privacidade do nome do filho
  const getChildDisplayName = (name: string, privacy: 'full' | 'first' | 'initial' | 'hidden') => {
    if (!name) return 'Meu bebê';
    const parts = name.trim().split(' ');
    const first = parts[0];
    switch (privacy) {
      case 'full':    return name;
      case 'first':   return first;
      case 'initial': return `${first[0]}. ****`;
      case 'hidden':  return 'Meu bebê';
      default:        return first;
    }
  };

  const [childPrivacy, setChildPrivacy] = useState<'full' | 'first' | 'initial' | 'hidden'>(
    profile.childNamePrivacy || 'first'
  );

  useEffect(() => {
    if (profile.communityName) {
      setCommunityName(profile.communityName);
    }
    if (profile.childNamePrivacy) {
      setChildPrivacy(profile.childNamePrivacy);
    }
    if (profile.parentPhoto) {
      setParentPhoto(profile.parentPhoto);
    }
    if (profile.parentPhotoPrivacy) {
      setParentPhotoPrivacy(profile.parentPhotoPrivacy);
    }
    if (profile.parentNamePrivacy) {
      setParentNamePrivacy(profile.parentNamePrivacy);
    }
    if (profile.parentRole) {
      setParentRole(profile.parentRole);
    }
  }, [profile.communityName, profile.childNamePrivacy, profile.parentPhoto, profile.parentPhotoPrivacy, profile.parentNamePrivacy, profile.parentRole]);

  const childAgeText = useMemo(() => {
    const birth = new Date(profile.birthDate);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - birth.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 0) return "gestante";
    
    const years = Math.floor(diffDays / 365);
    const months = Math.floor((diffDays % 365) / 30);
    
    if (years > 0) {
      return `${parentRole === 'mother' ? 'mãe' : 'pai'} de ${years} ${years === 1 ? 'ano' : 'anos'}${months > 0 ? ` e ${months} ${months === 1 ? 'mês' : 'meses'}` : ''}`;
    }
    return `${parentRole === 'mother' ? 'mãe' : 'pai'} de ${months} ${months === 1 ? 'mês' : 'meses'}`;
  }, [profile, parentRole]);

  const authorDisplayName = useMemo(() => {
    if (parentNamePrivacy === 'hidden') return 'Anônimo';
    return communityName;
  }, [communityName, parentNamePrivacy]);

  const currentEra = useMemo(() => {
    const birth = new Date(profile.birthDate);
    const now = new Date();
    const diffYears = (now.getTime() - birth.getTime()) / (1000 * 60 * 60 * 24 * 365);
    
    if (diffYears < 0) return "ERA 1";
    if (diffYears < 2) return "ERA 2";
    if (diffYears < 4) return "ERA 3";
    if (diffYears < 6) return "ERA 4";
    return "ERA 5";
  }, [profile]);

  // Real-time Posts Listener
  useEffect(() => {
    if (!userId) {
      setPosts([]);
      setLoading(false);
      return;
    }
    setLoading(true);
    const communityRef = collection(db, 'community');
    const sortBy = activeTab === 'tip' ? 'likes' : 'createdAt';
    const q = query(
      communityRef,
      where("type", "==", activeTab),
      where("reported", "==", false)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetchedPosts = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id } as CommunityPost));
      
      // Client-side sorting
      const sortedPosts = fetchedPosts.sort((a, b) => {
        const valA = a[sortBy];
        const valB = b[sortBy];
        const timeA = valA && typeof valA === 'object' && 'seconds' in valA ? valA.seconds : (valA instanceof Date ? valA.getTime() : valA);
        const timeB = valB && typeof valB === 'object' && 'seconds' in valB ? valB.seconds : (valB instanceof Date ? valB.getTime() : valB);
        if (timeA < timeB) return 1;
        if (timeA > timeB) return -1;
        return 0;
      });

      // Play sound for new posts (not from current user)
      if (!initialLoadRef.current) {
        snapshot.docChanges().forEach(change => {
          if (change.type === 'added') {
            const post = change.doc.data() as CommunityPost;
            if (post.authorId !== userId) {
              playICQMessage();
            }
          }
        });
      }

      setPosts(sortedPosts);
      setLoading(false);
      initialLoadRef.current = false;
    }, (error) => {
      console.error("Erro ao listar comunidade:", error);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [activeTab, userId]);

  // Real-time Comments Listener
  useEffect(() => {
    if (!selectedPost) return;

    const commentsRef = collection(db, 'community', selectedPost.id, 'comments');
    const q = query(commentsRef, orderBy("createdAt", "asc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetchedComments = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id } as CommunityComment));
      
      // Play sound for new comments (not from current user)
      if (!initialLoadRef.current) {
        snapshot.docChanges().forEach(change => {
          if (change.type === 'added') {
            const comment = change.doc.data() as CommunityComment;
            if (comment.authorId !== userId) {
              playICQMessage();
            }
          }
        });
      }

      setComments(fetchedComments);
    }, (error) => {
      console.error("Erro ao listar comentários:", error);
    });

    return () => unsubscribe();
  }, [selectedPost, userId]);

  const handleLike = async (postId: string, likedBy: string[]) => {
    if (!userId) return;
    
    try {
      const isLiking = !likedBy.includes(userId);
      await likePost(postId, userId, isLiking);
      // No need to fetchPosts(), onSnapshot handles it
    } catch (error) {
      console.error("Erro ao curtir post:", error);
    }
  };

  const handleAddComment = async () => {
    if (!userId || !selectedPost || !newComment.trim()) return;
    
    const commentData = {
      authorId: userId,
      authorName: communityName,
      authorAge: childAgeText,
      authorPhoto: parentPhoto,
      authorPhotoPrivacy: parentPhotoPrivacy,
      content: newComment.trim()
    };

    try {
      await addComment(selectedPost.id, commentData);
      playICQMessage();
      setNewComment('');
      // No need to getComments(), onSnapshot handles it
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  const handleReport = async (postId: string) => {
    if (!window.confirm("Deseja denunciar este post? Ele será ocultado para você.")) return;
    try {
      await reportPost(postId);
      setPosts(prev => prev.filter(p => p.id !== postId));
      setActiveMenuPostId(null);
    } catch (error) {
      console.error("Error reporting post:", error);
    }
  };

  const handleDeletePost = async (postId: string) => {
    setConfirmDeleteId(postId);
    setActiveMenuPostId(null);
  };

  const confirmDelete = async () => {
    if (!confirmDeleteId) return;
    try {
      await deleteCommunityPost(confirmDeleteId);
      setPosts(prev => prev.filter(p => p.id !== confirmDeleteId));
      setConfirmDeleteId(null);
      setActiveMenuPostId(null);
    } catch (error) {
      console.error("Error deleting post:", error);
      alert("Erro ao excluir post.");
    }
  };

  const handleEditPost = (post: CommunityPost) => {
    setEditingPost(post);
    setPostType(post.type);
    setPostContent(post.content);
    setPostImage(post.imageUrl || null);
    setChildPrivacy(post.childNamePrivacy || 'first');
    setShowNewPost(true);
    setActiveMenuPostId(null);
  };

  const takePhoto = async () => {
    try {
      const image = await CapacitorCamera.getPhoto({
        quality: 50,
        allowEditing: true,
        resultType: CameraResultType.Base64
      });
      if (image.base64String) {
        const optimized = await processImageForUpload(`data:image/jpeg;base64,${image.base64String}`);
        setPostImage(optimized);
      }
    } catch (error: any) {
      if (error.message !== 'User cancelled photos app') {
        console.error("Error taking photo:", error);
      }
    }
  };

  const handlePublish = async () => {
    if (!userId) {
      alert("Você precisa estar logado para publicar na comunidade.");
      return;
    }
    if (!postContent.trim()) {
      alert("O conteúdo do post não pode estar vazio.");
      return;
    }
    
    setIsPublishing(true);
    console.log("Community: Publishing post...", { postType, postContent: postContent.trim() });

    try {
      const postData = {
        type: postType,
        authorId: userId,
        authorName: communityName,
        authorAge: childAgeText,
        content: postContent.trim(),
        imageUrl: postImage,
        era: currentEra,
        childNamePrivacy: childPrivacy,
        childDisplayName: getChildDisplayName(profile.name, childPrivacy),
        authorPhoto: parentPhoto,
        authorPhotoPrivacy: parentPhotoPrivacy
      };

      if (editingPost) {
        console.log("Community: Updating existing post", editingPost.id);
        await updateCommunityPost(editingPost.id, postData);
      } else {
        console.log("Community: Creating new post");
        await createCommunityPost(postData);
      }

      playICQMessage();

      // Salvar preferência de privacidade no perfil
      if (childPrivacy !== profile.childNamePrivacy) {
        await onUpdateProfile({ childNamePrivacy: childPrivacy });
      }
      setShowNewPost(false);
      setEditingPost(null);
      setPostContent('');
      setPostImage(null);
      // No need to fetchPosts(), onSnapshot handles it
    } catch (error: any) {
      console.error("Error publishing post:", error);
      let errorMessage = "Erro ao publicar. Tente novamente.";
      
      // Tentar extrair erro do Firestore se for o formato JSON que definimos
      try {
        const parsedError = JSON.parse(error.message);
        if (parsedError.error.includes('insufficient permissions')) {
          errorMessage = "Erro de permissão. Verifique se você está logado corretamente.";
        }
      } catch (e) {
        // Não é JSON, usar mensagem padrão
      }
      
      alert(errorMessage);
    } finally {
      setIsPublishing(false);
    }
  };

  const openComments = async (post: CommunityPost) => {
    setSelectedPost(post);
    // onSnapshot will handle fetching comments
  };

  const formatDate = (date: any) => {
    if (!date) return "";
    const d = date.toDate ? date.toDate() : new Date(date);
    return d.toLocaleDateString('pt-BR');
  };

  return (
    <div className="flex flex-col h-full bg-[#FDFCF0]">
      {/* HEADER */}
      <header className="p-6 bg-white border-b-4 border-slate-100">
        <div className="flex items-center gap-3 mb-6">
          <button 
            onClick={() => setIsEditingName(true)}
            className="w-12 h-12 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600 shadow-sm overflow-hidden relative group"
          >
            {parentPhoto && parentPhotoPrivacy === 'public' ? (
              <img src={parentPhoto} alt="Parent" className="w-full h-full object-cover" />
            ) : (
              <Users className="w-6 h-6" />
            )}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <CameraIcon className="w-4 h-4 text-white" />
            </div>
          </button>
          <div className="flex-1">
            <h1 className="text-2xl font-black text-slate-800 tracking-tighter">Comunidade</h1>
            <div className="flex items-center gap-2 mt-1">
              <span className="font-black text-slate-800 text-sm">
                {parentNamePrivacy === 'hidden' ? 'Anônimo' : communityName}
              </span>
              <button onClick={() => setIsEditingName(true)} className="text-[8px] font-black text-slate-400 uppercase tracking-widest underline">Editar Perfil</button>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button 
              onClick={() => setActiveView(activeView === 'notifications' ? 'feed' : 'notifications')}
              className={`p-3 rounded-2xl relative transition-all ${activeView === 'notifications' ? 'bg-indigo-500 text-white' : 'bg-slate-50 text-slate-400'}`}
            >
              <Bell className="w-5 h-5" />
              {unreadNotificationsCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-rose-500 text-white text-[10px] font-black rounded-full flex items-center justify-center border-2 border-white">
                  {unreadNotificationsCount}
                </span>
              )}
            </button>
            <button 
              onClick={() => setActiveView(activeView === 'friends' ? 'feed' : 'friends')}
              className={`p-3 rounded-2xl relative transition-all ${activeView === 'friends' ? 'bg-indigo-500 text-white' : 'bg-slate-50 text-slate-400'}`}
            >
              <UserPlus className="w-5 h-5" />
              {friendRequests.length > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-rose-500 text-white text-[10px] font-black rounded-full flex items-center justify-center border-2 border-white">
                  {friendRequests.length}
                </span>
              )}
            </button>
            <button 
              onClick={() => setActiveView(activeView === 'chat' ? 'feed' : 'chat')}
              className={`p-3 rounded-2xl relative transition-all ${activeView === 'chat' ? 'bg-indigo-500 text-white' : 'bg-slate-50 text-slate-400'}`}
            >
              <MessageCircle className="w-5 h-5" />
              {unreadMessagesCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-rose-500 text-white text-[10px] font-black rounded-full flex items-center justify-center border-2 border-white">
                  {unreadMessagesCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* PROFILE EDITOR MODAL (Expanded) */}
        <AnimatePresence>
          {isEditingName && (
            <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="w-full max-w-md bg-white rounded-[3rem] p-8 space-y-6"
              >
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-black text-slate-800 tracking-tighter">Editar Perfil</h2>
                  <button onClick={() => setIsEditingName(false)} className="p-2 text-slate-300">
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Photo Upload */}
                <div className="flex flex-col items-center gap-4">
                  <button 
                    onClick={takeParentPhoto}
                    className="w-24 h-24 bg-slate-100 rounded-[2rem] flex items-center justify-center text-slate-400 overflow-hidden border-4 border-slate-50 shadow-inner relative group"
                  >
                    {parentPhoto ? (
                      <img src={parentPhoto} alt="Parent" className="w-full h-full object-cover" />
                    ) : (
                      <CameraIcon className="w-8 h-8" />
                    )}
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <p className="text-[8px] font-black text-white uppercase">Trocar</p>
                    </div>
                  </button>
                  <div className="flex gap-2">
                    <button 
                      onClick={() => setParentPhotoPrivacy('public')}
                      className={`px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest ${parentPhotoPrivacy === 'public' ? 'bg-emerald-100 text-emerald-600' : 'bg-slate-100 text-slate-400'}`}
                    >
                      Público
                    </button>
                    <button 
                      onClick={() => setParentPhotoPrivacy('hidden')}
                      className={`px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest ${parentPhotoPrivacy === 'hidden' ? 'bg-rose-100 text-rose-600' : 'bg-slate-100 text-slate-400'}`}
                    >
                      Oculto
                    </button>
                  </div>
                </div>

                {/* Name Edit */}
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Seu nome na comunidade</label>
                  <input
                    value={communityName}
                    onChange={e => {
                      setCommunityName(e.target.value);
                      playTypewriterKey();
                    }}
                    maxLength={20}
                    className="w-full p-4 bg-slate-50 rounded-2xl border-2 border-slate-100 font-black text-sm focus:border-indigo-400 outline-none transition-all"
                    placeholder="Ex: Mãe do Theo"
                  />
                  <div className="flex gap-2 mt-2">
                    <button 
                      onClick={() => setParentNamePrivacy('public')}
                      className={`px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest ${parentNamePrivacy === 'public' ? 'bg-emerald-100 text-emerald-600' : 'bg-slate-100 text-slate-400'}`}
                    >
                      Mostrar Nome
                    </button>
                    <button 
                      onClick={() => setParentNamePrivacy('hidden')}
                      className={`px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest ${parentNamePrivacy === 'hidden' ? 'bg-rose-100 text-rose-600' : 'bg-slate-100 text-slate-400'}`}
                    >
                      Ocultar Nome
                    </button>
                  </div>
                </div>

                {/* Parent Role Selection */}
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Você é:</label>
                  <div className="flex gap-4">
                    <button 
                      onClick={() => setParentRole('mother')}
                      className={`flex-1 py-4 rounded-2xl border-2 font-black text-xs transition-all ${parentRole === 'mother' ? 'border-rose-400 bg-rose-50 text-rose-600' : 'border-slate-100 bg-white text-slate-400'}`}
                    >
                      Mãe
                    </button>
                    <button 
                      onClick={() => setParentRole('father')}
                      className={`flex-1 py-4 rounded-2xl border-2 font-black text-xs transition-all ${parentRole === 'father' ? 'border-indigo-400 bg-indigo-50 text-indigo-600' : 'border-slate-100 bg-white text-slate-400'}`}
                    >
                      Pai
                    </button>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button 
                    onClick={() => setIsEditingName(false)}
                    className="flex-1 py-4 bg-slate-100 text-slate-500 rounded-2xl font-black text-[10px] uppercase tracking-widest"
                  >
                    Cancelar
                  </button>
                  <button 
                    onClick={handleSaveProfile}
                    className="flex-1 py-4 bg-indigo-500 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-lg border-b-4 border-indigo-700 active:border-b-0 active:translate-y-1 transition-all"
                  >
                    Salvar Perfil
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* PHASE FILTER BAR */}
        <div className="mb-3">
          <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-2">Filtrar por Fase da Mãe:</p>
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
            {[
              { id: 'all', label: 'Todas as Fases', emoji: '✨' },
              { id: 'gestacao', label: 'Gestação', emoji: '🤰' },
              { id: 'puerperio', label: 'Puerpério (0-3m)', emoji: '🍼' },
              { id: 'bebe_3_6', label: 'Bebê (3-6m)', emoji: '👶' },
              { id: 'blw_6_12', label: 'Introdução (6-12m)', emoji: '🥣' },
              { id: 'infancia_1_2', label: '1 a 2 Anos', emoji: '🎨' },
            ].map(phase => (
              <button
                key={phase.id}
                onClick={() => setSelectedPhase(phase.id)}
                className={`px-4 py-2.5 rounded-xl text-[9px] font-black uppercase tracking-wider transition-all whitespace-nowrap flex items-center gap-1.5 ${
                  selectedPhase === phase.id 
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200' 
                    : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                }`}
              >
                <span>{phase.emoji}</span> {phase.label}
              </button>
            ))}
          </div>
        </div>

        {/* TABS */}
        <div className="flex gap-2 p-1 bg-slate-100 rounded-2xl">
          <button 
            onClick={() => setActiveTab('question')}
            className={`flex-1 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all flex items-center justify-center gap-2 ${activeTab === 'question' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-400'}`}
          >
            <HelpCircle className="w-4 h-4" />
            Perguntas
          </button>
          <button 
            onClick={() => setActiveTab('moment')}
            className={`flex-1 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all flex items-center justify-center gap-2 ${activeTab === 'moment' ? 'bg-white text-rose-600 shadow-sm' : 'text-slate-400'}`}
          >
            <CameraIcon className="w-4 h-4" />
            Momentos
          </button>
          <button 
            onClick={() => setActiveTab('tip')}
            className={`flex-1 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all flex items-center justify-center gap-2 ${activeTab === 'tip' ? 'bg-white text-emerald-600 shadow-sm' : 'text-slate-400'}`}
          >
            <Lightbulb className="w-4 h-4" />
            Dicas
          </button>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-1 overflow-y-auto p-4 space-y-4 pb-32">
        {activeView === 'feed' && (
          <>
            {/* QUICK POST */}
            <div 
              onClick={() => {
                setEditingPost(null);
                setPostContent('');
                setPostImage(null);
                setPostType(activeTab);
                setShowNewPost(true);
              }}
              className="bg-white rounded-3xl p-4 border-2 border-slate-100 shadow-sm flex items-center gap-4 cursor-pointer active:scale-[0.98] transition-all"
            >
              <div className="w-10 h-10 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-400">
                {activeTab === 'question' ? <HelpCircle className="w-5 h-5" /> : activeTab === 'moment' ? <CameraIcon className="w-5 h-5" /> : <Lightbulb className="w-5 h-5" />}
              </div>
              <p className="text-xs font-bold text-slate-400">
                {activeTab === 'question' ? "Qual sua dúvida hoje?" : activeTab === 'moment' ? "Compartilhe um momento..." : "Tem alguma dica para compartilhar?"}
              </p>
            </div>

            {loading ? (
              <div className="flex flex-col items-center justify-center py-20 gap-4">
                <div className="w-12 h-12 border-4 border-indigo-100 border-t-indigo-500 rounded-full animate-spin"></div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Carregando feed...</p>
              </div>
            ) : posts.length === 0 ? (
              <div className="text-center py-20 space-y-4">
                <div className="text-6xl opacity-20">🕊️</div>
                <p className="text-sm font-bold text-slate-400">Ainda não há posts aqui. Seja o primeiro!</p>
              </div>
            ) : (
              posts.map(post => (
                <motion.div 
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-[2.5rem] border-2 border-slate-100 overflow-hidden shadow-sm"
                >
                  <div className="p-6 space-y-4">
                    {/* Post Header */}
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-slate-400 text-lg overflow-hidden">
                          {post.authorPhoto && post.authorPhotoPrivacy === 'public' ? (
                            <img src={post.authorPhoto} alt="Author" className="w-full h-full object-cover" />
                          ) : (
                            "👤"
                          )}
                        </div>
                        <div>
                          <h3 className="text-xs font-black text-slate-800">
                            {post.authorName} {post.childDisplayName && `• ${post.childDisplayName}`}
                          </h3>
                          <div className="flex items-center gap-2">
                            <span className="text-[8px] font-bold text-slate-400 uppercase">{post.authorAge}</span>
                            <span className="w-1 h-1 bg-slate-200 rounded-full"></span>
                            <span className="text-[8px] font-bold text-slate-400 uppercase">{post.era}</span>
                            <span className="w-1 h-1 bg-slate-200 rounded-full"></span>
                            <span className="text-[8px] font-bold text-slate-400 uppercase">
                              {formatDate(post.createdAt)}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="relative flex items-center gap-2">
                        {post.authorId !== userId && (
                          profile.friends?.includes(post.authorId) ? (
                            <span className="p-2 text-emerald-500 bg-emerald-50 rounded-xl text-xs font-bold" title="Já é seu amigo">
                              <Check className="w-4 h-4" />
                            </span>
                          ) : sentRequestTargetIds.includes(post.authorId) ? (
                            <span className="px-2 py-1 text-indigo-500 bg-indigo-50 rounded-xl text-[10px] font-black" title="Solicitação enviada">
                              ✓
                            </span>
                          ) : (
                            <button 
                              onClick={() => handleSendFriendRequest(post.authorId, post.authorName)}
                              className="p-2 text-indigo-500 hover:bg-indigo-50 rounded-xl transition-all"
                              title="Adicionar Amigo"
                            >
                              <UserPlus className="w-4 h-4" />
                            </button>
                          )
                        )}
                        <button 
                          onClick={() => setActiveMenuPostId(activeMenuPostId === post.id ? null : post.id)} 
                          className="p-2 text-slate-300 hover:text-indigo-500 transition-colors"
                        >
                          <MoreVertical className="w-4 h-4" />
                        </button>

                        <AnimatePresence>
                          {activeMenuPostId === post.id && (
                            <>
                              <div 
                                className="fixed inset-0 z-10" 
                                onClick={() => setActiveMenuPostId(null)}
                              />
                              <motion.div 
                                initial={{ opacity: 0, scale: 0.9, y: -10 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: -10 }}
                                className="absolute right-0 top-10 w-40 bg-white rounded-2xl shadow-xl border-2 border-slate-50 z-20 py-2 overflow-hidden"
                              >
                                {(post.authorId === userId || isAdmin) ? (
                                  <>
                                    {post.authorId === userId && (
                                      <button 
                                        onClick={() => handleEditPost(post)}
                                        className="w-full px-4 py-3 text-left text-[10px] font-black text-slate-600 hover:bg-slate-50 flex items-center gap-2"
                                      >
                                        <Edit2 className="w-3 h-3 text-indigo-400" />
                                        EDITAR POST
                                      </button>
                                    )}
                                    <button 
                                      onClick={() => handleDeletePost(post.id)}
                                      className="w-full px-4 py-3 text-left text-[10px] font-black text-rose-500 hover:bg-rose-50 flex items-center gap-2"
                                    >
                                      <Trash2 className="w-3 h-3" />
                                      EXCLUIR POST {isAdmin && post.authorId !== userId && "(ADMIN)"}
                                    </button>
                                  </>
                                ) : (
                                  <button 
                                    onClick={() => handleReport(post.id)}
                                    className="w-full px-4 py-3 text-left text-[10px] font-black text-rose-500 hover:bg-rose-50 flex items-center gap-2"
                                  >
                                    <Flag className="w-3 h-3" />
                                    DENUNCIAR
                                  </button>
                                )}
                              </motion.div>
                            </>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>

                    {/* Content */}
                    <p className="text-sm font-bold text-slate-600 leading-relaxed">
                      <Typewriter text={post.content} speed={20} playSound={true} />
                    </p>

                    {post.imageUrl && (
                      <div className="rounded-2xl overflow-hidden border-2 border-slate-50">
                        <img src={post.imageUrl} alt="Post" className="w-full h-auto object-cover max-h-64" referrerPolicy="no-referrer" />
                      </div>
                    )}

                    {/* Actions */}
                    <div className="flex items-center gap-4 pt-2">
                      <button 
                        onClick={() => handleLike(post.id, post.likedBy)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all ${post.likedBy.includes(userId || '') ? 'bg-rose-50 text-rose-500' : 'bg-slate-50 text-slate-400'}`}
                      >
                        <Heart className={`w-4 h-4 ${post.likedBy.includes(userId || '') ? 'fill-current' : ''}`} />
                        <span className="text-[10px] font-black">{post.likes}</span>
                      </button>
                      <button 
                        onClick={() => openComments(post)}
                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-50 text-slate-400"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span className="text-[10px] font-black">{post.comments}</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </>
        )}

        {activeView === 'notifications' && (
          <div className="space-y-4">
            <h2 className="text-xl font-black text-slate-800 tracking-tighter">Notificações</h2>
            {notifications.length === 0 ? (
              <div className="text-center py-20 text-slate-400 font-bold">Nenhuma notificação ainda.</div>
            ) : (
              notifications.map(notif => (
                <div 
                  key={notif.id}
                  onClick={() => handleMarkNotificationRead(notif.id)}
                  className={`p-4 rounded-3xl border-2 transition-all flex items-center gap-4 ${notif.read ? 'bg-white border-slate-50 opacity-60' : 'bg-indigo-50 border-indigo-100 shadow-sm'}`}
                >
                  <div className={`w-10 h-10 rounded-2xl flex items-center justify-center ${notif.type === 'like' ? 'bg-rose-100 text-rose-500' : notif.type === 'comment' ? 'bg-indigo-100 text-indigo-500' : 'bg-emerald-100 text-emerald-500'}`}>
                    {notif.type === 'like' ? <Heart className="w-5 h-5 fill-current" /> : notif.type === 'comment' ? <MessageCircle className="w-5 h-5" /> : <UserPlus className="w-5 h-5" />}
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-bold text-slate-700">
                      <span className="font-black">{notif.fromName}</span> {
                        notif.type === 'like' ? 'curtiu seu post.' : 
                        notif.type === 'comment' ? 'comentou no seu post.' : 
                        notif.type === 'friend_request' ? 'te enviou uma solicitação de amizade.' :
                        'aceitou sua solicitação de amizade.'
                      }
                    </p>
                    <span className="text-[8px] font-black text-slate-400 uppercase">{formatDate(notif.createdAt)}</span>
                  </div>
                  {!notif.read && <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>}
                </div>
              ))
            )}
          </div>
        )}

        {activeView === 'friends' && (
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-xl font-black text-slate-800 tracking-tighter">Amigos e Comunidade</h2>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input 
                  value={searchQuery}
                  onChange={e => handleSearch(e.target.value)}
                  placeholder="Buscar por nome, e-mail ou @comunidade..."
                  className="w-full pl-12 pr-4 py-4 bg-white border-2 border-slate-100 rounded-2xl font-bold text-sm focus:border-indigo-400 outline-none transition-all"
                />
              </div>
            </div>

            {isSearching ? (
              <div className="flex justify-center py-4">
                <div className="w-6 h-6 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
              </div>
            ) : searchQuery.trim().length > 0 ? (
              <div className="space-y-2">
                <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                  Resultados da Busca ({searchResults.length})
                </h3>
                {searchResults.length === 0 ? (
                  <div className="bg-slate-50 p-6 rounded-3xl text-center border-2 border-dashed border-slate-200">
                    <p className="text-xs font-bold text-slate-400">Nenhum usuário encontrado para "{searchQuery}"</p>
                  </div>
                ) : (
                  searchResults.map(user => {
                    const isFriend = profile.friends?.includes(user.id);
                    const isSent = sentRequestTargetIds.includes(user.id);
                    return (
                      <div key={user.id} className="bg-white p-4 rounded-3xl border-2 border-slate-50 flex items-center justify-between shadow-sm">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-500 font-bold overflow-hidden">
                            {user.parentPhoto ? (
                              <img src={user.parentPhoto} alt="User" className="w-full h-full object-cover" />
                            ) : (
                              '👤'
                            )}
                          </div>
                          <div>
                            <p className="text-xs font-black text-slate-800">
                              {user.communityName || user.name || 'Membro da Comunidade'}
                            </p>
                            <div className="flex items-center gap-2">
                              <p className="text-[8px] font-bold text-slate-400 uppercase">
                                {user.parentRole === 'mother' ? 'Mãe' : 'Pai'}
                              </p>
                              {user.email && (
                                <>
                                  <span className="w-1 h-1 bg-slate-200 rounded-full"></span>
                                  <p className="text-[8px] font-bold text-slate-400 lowercase">{user.email}</p>
                                </>
                              )}
                            </div>
                          </div>
                        </div>

                        {isFriend ? (
                          <span className="px-3 py-1.5 bg-emerald-50 text-emerald-600 rounded-xl text-[10px] font-black flex items-center gap-1">
                            <Check className="w-3 h-3" /> Amigo
                          </span>
                        ) : isSent ? (
                          <span className="px-3 py-1.5 bg-indigo-50 text-indigo-600 rounded-xl text-[10px] font-black">
                            Enviado ✓
                          </span>
                        ) : (
                          <button 
                            onClick={() => handleSendFriendRequest(user.id, user.communityName || user.name || 'Usuário')}
                            className="px-3 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl font-black text-[10px] flex items-center gap-1.5 transition-all shadow-sm active:scale-95"
                          >
                            <UserPlus className="w-3.5 h-3.5" /> Adicionar
                          </button>
                        )}
                      </div>
                    );
                  })
                )}
              </div>
            ) : null}

            {/* Sugestões de Membros da Comunidade (Se não estiver buscando) */}
            {!searchQuery.trim() && allMembers.length > 0 && (
              <div className="space-y-3">
                <div className="flex items-center justify-between px-2">
                  <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                    <Users className="w-3 h-3 text-indigo-400" />
                    Membros no App ({allMembers.length})
                  </h3>
                  <span className="text-[9px] font-bold text-indigo-500">Toque para adicionar</span>
                </div>
                <div className="space-y-2">
                  {allMembers.map(member => {
                    const isFriend = profile.friends?.includes(member.id);
                    const isSent = sentRequestTargetIds.includes(member.id);
                    return (
                      <div key={member.id} className="bg-white p-3.5 rounded-3xl border-2 border-slate-50 flex items-center justify-between shadow-sm hover:border-indigo-100 transition-all">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-slate-500 font-black text-xs overflow-hidden">
                            {member.parentPhoto ? (
                              <img src={member.parentPhoto} alt="Member" className="w-full h-full object-cover" />
                            ) : (
                              (member.communityName || member.name || 'M')[0].toUpperCase()
                            )}
                          </div>
                          <div>
                            <p className="text-xs font-black text-slate-800">
                              {member.communityName || member.name || 'Membro da Comunidade'}
                            </p>
                            <div className="flex items-center gap-2">
                              <p className="text-[8px] font-bold text-slate-400 uppercase">
                                {member.parentRole === 'mother' ? 'Mãe' : 'Pai'}
                              </p>
                              {member.email && (
                                <>
                                  <span className="w-1 h-1 bg-slate-200 rounded-full"></span>
                                  <p className="text-[8px] font-bold text-slate-400 lowercase">{member.email}</p>
                                </>
                              )}
                            </div>
                          </div>
                        </div>

                        {isFriend ? (
                          <span className="px-3 py-1 bg-emerald-50 text-emerald-600 rounded-xl text-[10px] font-black flex items-center gap-1">
                            <Check className="w-3 h-3" /> Amigos
                          </span>
                        ) : isSent ? (
                          <span className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-xl text-[10px] font-black">
                            Enviado ✓
                          </span>
                        ) : (
                          <button 
                            onClick={() => handleSendFriendRequest(member.id, member.communityName || member.name || 'Membro')}
                            className="px-3 py-1.5 bg-indigo-50 text-indigo-600 hover:bg-indigo-500 hover:text-white rounded-xl font-black text-[10px] flex items-center gap-1.5 transition-all"
                          >
                            <UserPlus className="w-3.5 h-3.5" /> Adicionar
                          </button>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {friendRequests.length > 0 && (
              <div className="space-y-2">
                <h3 className="text-[10px] font-black text-amber-500 uppercase tracking-widest flex items-center gap-1.5 px-2">
                  <Bell className="w-3 h-3 animate-bounce" />
                  Solicitações Recebidas ({friendRequests.length})
                </h3>
                {friendRequests.map(req => (
                  <div key={req.id} className="bg-amber-50/50 p-4 rounded-3xl border-2 border-amber-100 flex items-center justify-between shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center text-amber-700 font-black text-xs">
                        {req.fromName ? req.fromName[0].toUpperCase() : 'M'}
                      </div>
                      <div>
                        <p className="text-xs font-black text-slate-800">{req.fromName}</p>
                        <span className="text-[8px] font-bold text-amber-600">Quer ser seu amigo</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button 
                        onClick={() => handleAcceptFriendRequest(req)}
                        className="px-3 py-2 bg-emerald-500 text-white font-black text-[10px] rounded-xl flex items-center gap-1 active:scale-95 shadow-sm"
                      >
                        <Check className="w-3.5 h-3.5" /> Aceitar
                      </button>
                      <button 
                        onClick={() => handleDeclineFriendRequest(req.id)}
                        className="p-2 bg-slate-200 text-slate-600 rounded-xl"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="space-y-6">
              {onlineFriends.length > 0 && (
                <div className="space-y-3">
                  <h3 className="text-[10px] font-black text-emerald-500 uppercase tracking-widest flex items-center gap-2 px-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                    Amigos Online ({onlineFriends.length})
                  </h3>
                  <div className="space-y-2">
                    {onlineFriends.map(friend => (
                      <FriendItem key={friend.id} friendId={friend.id} onOpenChat={handleOpenChat} friend={friend} />
                    ))}
                  </div>
                </div>
              )}

              {offlineFriends.length > 0 && (
                <div className="space-y-3">
                  <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-2">
                    Amigos Offline ({offlineFriends.length})
                  </h3>
                  <div className="space-y-2">
                    {offlineFriends.map(friend => (
                      <FriendItem key={friend.id} friendId={friend.id} onOpenChat={handleOpenChat} friend={friend} />
                    ))}
                  </div>
                </div>
              )}

              {(!profile.friends || profile.friends.length === 0) && (
                <div className="text-center py-8 text-slate-400 font-bold text-xs bg-white rounded-3xl border-2 border-slate-50">
                  Sua lista de amigos ainda está vazia. Adicione membros acima!
                </div>
              )}
            </div>
          </div>
        )}

        {activeView === 'chat' && !activeChat && (
          <div className="space-y-4">
            <h2 className="text-xl font-black text-slate-800 tracking-tighter">Conversas</h2>
            {chats.length === 0 ? (
              <div className="text-center py-20 text-slate-400 font-bold">Nenhuma conversa ainda.</div>
            ) : (
              chats.map(chat => (
                <ChatListItem key={chat.id} chat={chat} userId={userId!} onClick={() => setActiveChat(chat)} />
              ))
            )}
          </div>
        )}

        {activeView === 'chat' && activeChat && (
          <div className="fixed inset-0 z-[3000] bg-white flex flex-col">
            <header className="p-6 border-b-2 border-slate-50 flex items-center gap-4">
              <button onClick={() => setActiveChat(null)} className="p-2 text-slate-400">
                <X className="w-6 h-6" />
              </button>
              <div className="flex-1">
                <h3 className="font-black text-slate-800">Chat</h3>
              </div>
            </header>
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {messages.map(msg => (
                <div key={msg.id} className={`flex ${msg.senderId === userId ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-4 rounded-3xl font-bold text-sm ${msg.senderId === userId ? 'bg-indigo-500 text-white rounded-tr-none' : 'bg-slate-100 text-slate-700 rounded-tl-none'}`}>
                    {msg.content}
                    <div className={`text-[8px] mt-1 flex items-center gap-1 ${msg.senderId === userId ? 'text-indigo-200' : 'text-slate-400'}`}>
                      {formatDate(msg.createdAt)}
                      {msg.senderId === userId && (
                        msg.status === 'read' ? <Check className="w-2 h-2 text-emerald-300" /> : <Check className="w-2 h-2" />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-6 border-t-2 border-slate-50 flex gap-2">
              <input 
                value={newMessage}
                onChange={e => setNewMessage(e.target.value)}
                onKeyPress={e => e.key === 'Enter' && handleSendMessage()}
                placeholder="Digite sua mensagem..."
                className="flex-1 p-4 bg-slate-50 rounded-2xl font-bold text-sm outline-none"
              />
              <button 
                onClick={handleSendMessage}
                className="p-4 bg-indigo-500 text-white rounded-2xl shadow-lg"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}
      </main>

      {/* FAB */}
      <button 
        onClick={() => setShowNewPost(true)}
        className="fixed bottom-32 right-6 w-16 h-16 bg-indigo-500 text-white rounded-full shadow-2xl flex items-center justify-center active:scale-95 transition-all z-50 border-b-4 border-indigo-700"
      >
        <Plus className="w-8 h-8" />
      </button>

      {/* NEW POST MODAL */}
      <AnimatePresence>
        {showNewPost && (
          <div className="fixed inset-0 z-[1000] flex items-end justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
            <motion.div 
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              className="w-full max-w-md bg-white rounded-[3rem] p-8 space-y-6"
            >
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-black text-slate-800 tracking-tighter">
                  {editingPost ? 'Editar Post' : 'Novo Post'}
                </h2>
                <button onClick={() => {
                  setShowNewPost(false);
                  setEditingPost(null);
                }} className="p-2 text-slate-300">
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Type Selector */}
              <div className="flex gap-2 p-1 bg-slate-100 rounded-2xl">
                <button 
                  onClick={() => setPostType('question')}
                  className={`flex-1 py-3 rounded-xl text-[8px] font-black uppercase tracking-widest transition-all ${postType === 'question' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-400'}`}
                >
                  Perguntar
                </button>
                <button 
                  onClick={() => setPostType('moment')}
                  className={`flex-1 py-3 rounded-xl text-[8px] font-black uppercase tracking-widest transition-all ${postType === 'moment' ? 'bg-white text-rose-600 shadow-sm' : 'text-slate-400'}`}
                >
                  Momento
                </button>
                <button 
                  onClick={() => setPostType('tip')}
                  className={`flex-1 py-3 rounded-xl text-[8px] font-black uppercase tracking-widest transition-all ${postType === 'tip' ? 'bg-white text-emerald-600 shadow-sm' : 'text-slate-400'}`}
                >
                  Dica
                </button>
              </div>

              <div className="space-y-2">
                <textarea 
                  value={postContent}
                  onChange={(e) => {
                    setPostContent(e.target.value.slice(0, 300));
                    playTypewriterKey();
                  }}
                  placeholder={postType === 'question' ? "Qual sua dúvida?" : postType === 'moment' ? "Compartilhe um momento especial..." : "Qual sua dica de hoje?"}
                  className="w-full h-32 p-6 bg-slate-50 rounded-3xl border-2 border-slate-100 font-bold text-sm focus:border-indigo-400 outline-none transition-all resize-none"
                />
                <div className="flex justify-end">
                  <span className={`text-[10px] font-black ${postContent.length >= 300 ? 'text-rose-400' : 'text-slate-300'}`}>
                    {postContent.length}/300
                  </span>
                </div>
              </div>

              {postType === 'moment' && (
                <div className="flex items-center gap-4">
                  <button 
                    onClick={takePhoto}
                    className="flex items-center gap-2 px-6 py-4 bg-rose-50 text-rose-500 rounded-2xl font-black text-[10px] uppercase tracking-widest active:scale-95 transition-all"
                  >
                    <Camera className="w-4 h-4" />
                    {postImage ? 'Trocar Foto' : 'Adicionar Foto'}
                  </button>
                  {postImage && (
                    <div className="w-16 h-16 rounded-xl overflow-hidden border-2 border-rose-100">
                      <img src={postImage} alt="Preview" className="w-full h-full object-cover" />
                    </div>
                  )}
                </div>
              )}

              <div className="space-y-2 mt-4">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                  Como exibir o nome do seu filho?
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { value: 'full',    label: '✅ Nome completo', example: profile.name },
                    { value: 'first',   label: '👤 Só o primeiro', example: profile.name?.split(' ')[0] },
                    { value: 'initial', label: '🔒 Inicial + ****', example: `${profile.name?.[0]}. ****` },
                    { value: 'hidden',  label: '🛡️ Ocultar',       example: 'Meu bebê' },
                  ].map(opt => (
                    <button
                      key={opt.value}
                      onClick={() => setChildPrivacy(opt.value as any)}
                      className={`p-3 rounded-2xl border-2 text-left transition-all ${
                        childPrivacy === opt.value
                          ? 'border-slate-800 bg-slate-800 text-white'
                          : 'border-slate-100 bg-white text-slate-600'
                      }`}
                    >
                      <p className="text-[9px] font-black uppercase">{opt.label}</p>
                      <p className="text-[8px] font-bold opacity-70 mt-1">{opt.example}</p>
                    </button>
                  ))}
                </div>
              </div>

              <button 
                onClick={handlePublish}
                disabled={isPublishing || !postContent.trim()}
                className="w-full py-5 bg-indigo-500 text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl border-b-4 border-indigo-700 active:border-b-0 active:translate-y-1 transition-all disabled:opacity-50"
              >
                {isPublishing ? 'Publicando...' : editingPost ? 'Salvar Alterações' : 'Publicar Agora'}
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* DELETE CONFIRMATION MODAL */}
      <AnimatePresence>
        {confirmDeleteId && (
          <div className="fixed inset-0 z-[3000] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="w-full max-w-xs bg-white rounded-[2.5rem] p-8 space-y-6 text-center"
            >
              <div className="w-16 h-16 bg-rose-50 rounded-full flex items-center justify-center text-rose-500 mx-auto">
                <Trash2 className="w-8 h-8" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-black text-slate-800">Excluir Post?</h3>
                <p className="text-xs font-bold text-slate-400">Esta ação não pode ser desfeita.</p>
              </div>
              <div className="flex gap-3">
                <button 
                  onClick={() => setConfirmDeleteId(null)}
                  className="flex-1 py-4 bg-slate-100 text-slate-500 rounded-2xl font-black text-[10px] uppercase tracking-widest"
                >
                  Não
                </button>
                <button 
                  onClick={confirmDelete}
                  className="flex-1 py-4 bg-rose-500 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-lg border-b-4 border-rose-700 active:border-b-0 active:translate-y-1 transition-all"
                >
                  Sim, Excluir
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* COMMENTS MODAL */}
      <AnimatePresence>
        {selectedPost && (
          <div className="fixed inset-0 z-[1100] flex items-end justify-center bg-slate-900/60 backdrop-blur-sm">
            <motion.div 
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              className="w-full max-w-md h-[80vh] bg-white rounded-t-[3rem] flex flex-col"
            >
              <div className="p-8 border-b-2 border-slate-50 flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-black text-slate-800 tracking-tighter">Comentários</h2>
                  <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Post de {selectedPost.authorName}</p>
                </div>
                <button onClick={() => setSelectedPost(null)} className="p-2 text-slate-300">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {comments.length === 0 ? (
                  <div className="text-center py-10">
                    <p className="text-xs font-bold text-slate-300 italic">Nenhum comentário ainda. Seja o primeiro!</p>
                  </div>
                ) : (
                  comments.map(comment => (
                    <div key={comment.id} className="bg-slate-50 p-4 rounded-2xl space-y-2">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-slate-200 rounded-lg flex items-center justify-center text-[10px] overflow-hidden">
                            {comment.authorPhoto && comment.authorPhotoPrivacy === 'public' ? (
                              <img src={comment.authorPhoto} alt="Author" className="w-full h-full object-cover" />
                            ) : (
                              "👤"
                            )}
                          </div>
                          <h4 className="text-[10px] font-black text-slate-800">{comment.authorName}</h4>
                        </div>
                        <span className="text-[8px] font-bold text-slate-300 uppercase">
                          {formatDate(comment.createdAt)}
                        </span>
                      </div>
                      <p className="text-xs font-bold text-slate-600 leading-relaxed">
                        <Typewriter text={comment.content} speed={20} playSound={true} />
                      </p>
                    </div>
                  ))
                )}
              </div>

              <div className="p-6 border-t-2 border-slate-50 bg-white">
                <div className="flex gap-2">
                  <input 
                    type="text" 
                    value={newComment}
                    onChange={(e) => {
                      setNewComment(e.target.value.slice(0, 200));
                      playTypewriterKey();
                    }}
                    placeholder="Escreva um comentário..."
                    className="flex-1 p-4 bg-slate-50 rounded-xl border-2 border-slate-100 font-bold text-xs focus:border-indigo-400 outline-none transition-all"
                  />
                  <button 
                    onClick={handleAddComment}
                    disabled={!newComment.trim()}
                    className="w-12 h-12 bg-indigo-500 text-white rounded-xl flex items-center justify-center shadow-lg active:scale-95 transition-all disabled:opacity-50"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Helper Components
const FriendItem: React.FC<{ friendId: string; onOpenChat: (id: string) => void; friend?: ChildProfile }> = ({ friendId, onOpenChat, friend: propFriend }) => {
  const [fetchedFriend, setFetchedFriend] = useState<ChildProfile | null>(null);

  useEffect(() => {
    if (!propFriend) {
      getUserProfile(friendId).then(setFetchedFriend);
    }
  }, [friendId, propFriend]);

  const friend = propFriend || fetchedFriend;
  if (!friend) return null;

  return (
    <div className="bg-white p-4 rounded-3xl border-2 border-slate-50 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="relative">
          <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-slate-400 overflow-hidden">
            {friend.parentPhoto && friend.parentPhotoPrivacy === 'public' ? (
              <img src={friend.parentPhoto} alt="Friend" className="w-full h-full object-cover" />
            ) : (
              "👤"
            )}
          </div>
          <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white ${friend.presence?.isOnline ? 'bg-emerald-500' : 'bg-slate-300'}`}></div>
        </div>
        <div>
          <p className="text-xs font-black text-slate-800">{friend.communityName || 'Amigo'}</p>
          <p className="text-[8px] font-bold text-slate-400 uppercase">
            {friend.presence?.isOnline ? 'Online' : friend.presence?.lastSeen ? `Visto ${new Date(friend.presence.lastSeen.toDate ? friend.presence.lastSeen.toDate() : friend.presence.lastSeen).toLocaleTimeString()}` : 'Offline'}
          </p>
        </div>
      </div>
      <button 
        onClick={() => onOpenChat(friendId)}
        className="p-2 bg-indigo-50 text-indigo-500 rounded-xl"
      >
        <MessageCircle className="w-4 h-4" />
      </button>
    </div>
  );
};

const ChatListItem: React.FC<{ chat: Chat; userId: string; onClick: () => void }> = ({ chat, userId, onClick }) => {
  const otherId = chat.participants.find(id => id !== userId);
  const [otherUser, setOtherUser] = useState<ChildProfile | null>(null);

  useEffect(() => {
    if (otherId) getUserProfile(otherId).then(setOtherUser);
  }, [otherId]);

  if (!otherUser) return null;

  return (
    <div onClick={onClick} className="bg-white p-4 rounded-3xl border-2 border-slate-50 flex items-center gap-4 cursor-pointer active:bg-slate-50 transition-all">
      <div className="relative">
        <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-400 overflow-hidden">
          {otherUser.parentPhoto && otherUser.parentPhotoPrivacy === 'public' ? (
            <img src={otherUser.parentPhoto} alt="User" className="w-full h-full object-cover" />
          ) : (
            "👤"
          )}
        </div>
        {otherUser.presence?.isOnline && (
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white"></div>
        )}
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-center">
          <p className="text-xs font-black text-slate-800">{otherUser.communityName}</p>
          <span className="text-[8px] font-bold text-slate-400 uppercase">
            {chat.lastMessageAt ? new Date(chat.lastMessageAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : ''}
          </span>
        </div>
        <p className="text-[10px] font-bold text-slate-400 truncate max-w-[150px]">{chat.lastMessage || 'Inicie uma conversa'}</p>
      </div>
      {(chat.unreadCount?.[userId] || 0) > 0 && (
        <div className="w-5 h-5 bg-indigo-500 text-white text-[10px] font-black rounded-full flex items-center justify-center">
          {chat.unreadCount![userId]}
        </div>
      )}
    </div>
  );
};

export default Community;
