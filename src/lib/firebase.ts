import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, setPersistence, browserLocalPersistence } from "firebase/auth";
import { getFirestore, doc, getDocFromServer } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getMessaging, isSupported } from "firebase/messaging";
import firebaseConfig from '../../firebase-applet-config.json';

console.log("Initializing Firebase with config:", firebaseConfig.projectId);

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// Explicitly set persistence to browserLocalPersistence for Capacitor/Web
const auth = getAuth(app);
setPersistence(auth, browserLocalPersistence).catch(e => {
  console.warn("Auth persistence error:", e);
});

export { auth };

// Use the specific database ID if provided
export const db = getFirestore(app, (firebaseConfig as any).firestoreDatabaseId || '(default)');

export const storage = getStorage(app);

// Connection test
async function testConnection() {
  try {
    // Try server first to ensure we are online and sync'd
    await getDocFromServer(doc(db, '_connection_test', 'startup'));
    console.log(`Firebase connection verified for project: ${firebaseConfig.projectId}`);
  } catch (error: any) {
    if (error.message && error.message.includes('the client is offline')) {
      console.error("Firebase is offline. Check your configuration and network.");
    } else if (error.code === 'permission-denied') {
      // This is expected as we don't have rules for _connection_test
      console.log("Firebase rules are active and blocking unauthorized access (Expected).");
    } else {
      console.warn("Firebase connection test warning:", error.message);
    }
  }
}

testConnection();

export const messagingPromise = isSupported().then(supported =>
  supported ? getMessaging(app) : null
).catch(err => {
  console.warn("Firebase Messaging is not supported or failed to initialize:", err);
  return null;
});

export const VAPID_KEY = "BCSGtLd-J19pBBNDrMSbIHIV3lD9Rpv2Ck331tT5wckYTOque01fjBVEDY4KucRiCZA-zCE1IWDthE7GsBy7rA8";
