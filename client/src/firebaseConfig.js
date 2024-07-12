import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyAUDqvlauq2GXA-dzGTPaKlzo1HW8O4hdI",
    authDomain: "shine-media-backend.firebaseapp.com",
    projectId: "shine-media-backend",
    storageBucket: "shine-media-backend.appspot.com",
    messagingSenderId: "729655169660",
    appId: "1:729655169660:web:6f6e339cf55866f01ceff9",
    measurementId: "G-VKEWVLR3T8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
