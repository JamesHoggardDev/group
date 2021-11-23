import React from 'react';
import './App.css';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import {useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyDEjgSylZ_7MHqcB_pM8yG1VRPpq_ZkLS8",
  authDomain: "group-a7f65.firebaseapp.com",
  projectId: "group-a7f65",
  storageBucket: "group-a7f65.appspot.com",
  messagingSenderId: "976698102839",
  appId: "1:976698102839:web:8594a4f5992c9b87ea1bb2",
  measurementId: "G-CTHKJRHVPR"
})

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
      </header>
    </div>
  );
}

export default App;
