importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js");

const firebaseConfig = {
    apiKey: "AIzaSyCUqYFyYMHQNT8-CdOfkdh2mMhv4bUNIh4",
    authDomain: "chatap-2ca07.firebaseapp.com",
    databaseURL: "https://chatap-2ca07-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "chatap-2ca07",
    storageBucket: "chatap-2ca07.firebasestorage.app",
    messagingSenderId: "46577729580",
    appId: "1:46577729580:web:82811d9c9ca18162895189"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// ব্রাউজার বন্ধ থাকলে এই অংশটি নোটিফিকেশন ধরবে
messaging.onBackgroundMessage(function(payload) {
    const notificationTitle = "New Message Received";
    const notificationOptions = {
        body: payload.data.text || "Someone sent you a message.",
        icon: "https://cdn-icons-png.flaticon.com/512/1041/1041916.png"
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
