import Button from './components/Button';
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

const auth = new firebase.auth

function App() {
  const [user, setUser] = useState(() => auth.currentUser());

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if(user){
        setUser(user);
      } else {
        setUser(null);
      }
      if(initializing){
        setInitializing(false);
      }
    });
    return unsubscribe;
  }, [])

   const signInWithGoogle = async () => {

    const provider = new firebase.auth.GoogleAuthProvider();
    //set language
    auth.useDeviceLanguage();
    //start
    try {
      await auth.signInWithPopup(provider);
    } catch (error) {
      console.error(error);
    }
   };

   if (initializing)

  return (
    <div>
     <Button onClick={signInWithGoogle}> Sign in with Google</Button>
    </div>
  );
}

export default App;
