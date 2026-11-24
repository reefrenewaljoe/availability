// Shows push notifications while the app is closed.
// The page registers this file as "firebase-messaging-sw.js?apiKey=...&projectId=...",
// so the Firebase settings come from config.js and nothing needs editing here.
importScripts(
  'https://www.gstatic.com/firebasejs/10.14.1/firebase-app-compat.js',
  'https://www.gstatic.com/firebasejs/10.14.1/firebase-messaging-compat.js'
);

const p = new URL(self.location.href).searchParams;
firebase.initializeApp({
  apiKey: p.get('apiKey'),
  projectId: p.get('projectId'),
  messagingSenderId: p.get('messagingSenderId'),
  appId: p.get('appId'),
});
// Firebase shows each notification and opens the app when it's tapped.
firebase.messaging();

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
