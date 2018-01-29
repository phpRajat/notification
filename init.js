
if (typeof firebase === 'undefined') throw new Error('hosting/init-error: Firebase SDK not detected. You must include it before /__/firebase/init.js');
firebase.initializeApp({
  "apiKey": "AIzaSyBvgRDksEZQySHJub7s4EuZQZ0TZo6SXT4",
  "databaseURL": "https://essitco-55f7b.firebaseio.com",
  "storageBucket": "essitco-55f7b.appspot.com",
  "authDomain": "essitco-55f7b.firebaseapp.com",
  "messagingSenderId": "825938127073",
  "projectId": "essitco-55f7b"
});