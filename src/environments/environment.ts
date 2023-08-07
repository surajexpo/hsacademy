
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/auth';
export const environment = {
production: false,
  firebaseConfig : {
  apiKey: "AIzaSyDD4A4AuKZRCImHup2l3HQ8CDBm4Ssf6_o",
  authDomain: "hsacademy-e1be4.firebaseapp.com",
  projectId: "hsacademy-e1be4",
  storageBucket: "hsacademy-e1be4.appspot.com",
  messagingSenderId: "312169676917",
  appId: "1:312169676917:web:ff192a60ff421ff4d3783c",
  measurementId: "G-CW3E5200YJ"
}
};
// Initialize Firebase
initializeApp(environment.firebaseConfig);
