import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyA1MMMUTVy2nHLzYb9swrPhBG1ivgZpVM8",
  authDomain: "stay-vista-starter.firebaseapp.com",
  projectId: "stay-vista-starter",
  storageBucket: "stay-vista-starter.appspot.com",
  messagingSenderId: "558715877144",
  appId: "1:558715877144:web:4521653051eac4bc5c506d"
}

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
