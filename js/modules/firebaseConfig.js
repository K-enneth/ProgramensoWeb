import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyDw6M8q32E-PEKG8BRo75ZOEtc8wXfLDrM",
    authDomain: "programensostudiosweb.firebaseapp.com",
    databaseURL: "https://programensostudiosweb-default-rtdb.firebaseio.com",
    projectId: "programensostudiosweb",
    storageBucket: "programensostudiosweb.appspot.com",
    messagingSenderId: "101780936855",
    appId: "1:101780936855:web:a6f831e371e53c4457b1d2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);