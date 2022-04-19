
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, onAuthStateChanged, signOut, signInWithPopup } from 'firebase/auth'
import { doc, getFirestore, setDoc } from 'firebase/firestore'
import { useEffect, useState } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyCl2mJM-mCUd32E0Z2Ne4KF5zZrrHjQrmQ",
  authDomain: "ecommerce-f2ce2.firebaseapp.com",
  projectId: "ecommerce-f2ce2",
  storageBucket: "ecommerce-f2ce2.appspot.com",
  messagingSenderId: "1071748986936",
  appId: "1:1071748986936:web:8e64523650bdc984d04ecd"
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider()
const auth = getAuth()
const db = getFirestore()

export { app, db }

export function useAuth(){
  const [ currentUser, setCurrentUser ] = useState(null)

  useEffect(() => 
    onAuthStateChanged(auth, user => {
      if (user) {
        setCurrentUser({
          email: user.email,
          name: user.displayName,
          img: user.photoURL
        })

        setDoc(doc(db, 'users', user.email),  
          { email: user.email})
      }
    }),
    []
  )

  return currentUser
}

export const handleSignOut = () =>{
  signOut(auth)
  window.location.reload(false)
}

export const handleSignIn = () =>{
 signInWithPopup(auth, provider)
}
