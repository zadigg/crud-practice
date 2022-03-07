// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLRY0W3-UgnGKNwBTOa3JunCvMyvds3pg",
  authDomain: "ethiobus-fc265.firebaseapp.com",
  projectId: "ethiobus-fc265",
  storageBucket: "ethiobus-fc265.appspot.com",
  messagingSenderId: "28121453687",
  appId: "1:28121453687:web:967f1ec1c94996f712e272",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore();
