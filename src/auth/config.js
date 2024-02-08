// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdpwiretTKGxupDlLaM3XUJ2TwsT5cqxQ",
  authDomain: "hackathon-build-for-bharat.firebaseapp.com",
  projectId: "hackathon-build-for-bharat",
  storageBucket: "hackathon-build-for-bharat.appspot.com",
  messagingSenderId: "808564598749",
  appId: "1:808564598749:web:564d0b4c2787a3481e3834",
  measurementId: "G-1LYRKRDDW4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);