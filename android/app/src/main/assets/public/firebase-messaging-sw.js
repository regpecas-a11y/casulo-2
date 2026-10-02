// CASULO PUSH FIX - 2
importScripts('https://www.gstatic.com/firebasejs/10.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.0.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyAiqgpYxobvsF5pZM26TNWryrrC-oM_Afg",
  authDomain: "casulo-app-2bd85.firebaseapp.com",
  projectId: "casulo-app-2bd85",
  storageBucket: "casulo-app-2bd85.firebasestorage.app",
  messagingSenderId: "745824928289",
  appId: "1:745824928289:web:1738a00b00b3012324d960"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(payload => {
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: '/logo.png?v=6',
    badge: '/logo.png?v=6',
    vibrate: [200, 100, 200]
  });
});
