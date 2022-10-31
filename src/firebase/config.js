// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"; 
import { getFirestore } from "firebase/firestore"; 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzyjzd-4sPHnzZHFCV8L1pYmRltOa3EV0",
  authDomain: "bikecommerce-db267.firebaseapp.com",
  projectId: "bikecommerce-db267",
  storageBucket: "bikecommerce-db267.appspot.com",
  messagingSenderId: "394149675149",
  appId: "1:394149675149:web:8926ce649469643d01a2c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

