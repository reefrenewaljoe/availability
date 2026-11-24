// 1) Paste your Apps Script web app link between the quotes.
// Find it in Apps Script: Deploy > Manage deployments > Web app URL (it ends in /exec).
window.API_URL = 'PASTE_YOUR_EXEC_LINK_HERE';

// 2) Push notifications (optional). Copy these from Firebase; see README, "Push notifications".
// These values are meant to be public. Never put the service-account key file here.
window.FIREBASE = {
  apiKey: '',
  authDomain: '',
  projectId: '',
  messagingSenderId: '',
  appId: '',
  vapidKey: '', // Project settings > Cloud Messaging > Web Push certificates > Key pair
};
