// 1) Paste your Apps Script web app link between the quotes.
// Find it in Apps Script: Deploy > Manage deployments > Web app URL (it ends in /exec).
window.API_URL = 'https://script.google.com/macros/s/AKfycbzwgNzYyhF3U9FlVM2IwrBtQqVCmHMyr0dtwZ_dMNqK51FoxW0uiHY3eFSS3zf_MeEO/exec';

// 2) Push notifications (optional). Copy these from Firebase; see README, "Push notifications".
// These values are meant to be public. Never put the service-account key file here.
window.FIREBASE = {
  apiKey: 'AIzaSyCoT0cfGxl4jpiLxEZz2z1v_9-UNFs6xig',
  authDomain: 'rrusa-availability.firebaseapp.com',
  projectId: 'rrusa-availability',
  messagingSenderId: '553744756590',
  appId: '1:553744756590:web:345e8aaba7c20cd5dddb7f',
  vapidKey: 'BEjTh5V3ehss3MzsqmbfYn-iOTf3F220fIIQorQ2c3o7LKNk-NkANuHC3pPN4Qmw6ZSgIS9yYog0uMFhyHU_Thw', // Project settings > Cloud Messaging > Web Push certificates > Key pair
};
