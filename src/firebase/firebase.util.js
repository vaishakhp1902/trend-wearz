import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { FacebookAuthProvider } from "firebase/auth";




const config = 
    {
        apiKey: "AIzaSyCKMjMahMKeS3YNCB9ObTpZ2C0zXNspaPQ",
        authDomain: "trend-wearz.firebaseapp.com",
        projectId: "trend-wearz",
        storageBucket: "trend-wearz.appspot.com",
        messagingSenderId: "74899697581",
        appId: "1:74899697581:web:4abb494ec286d3ee65bb24",
        measurementId: "G-CTCGE9FCNT"
      }


      firebase.initializeApp(config)


      export const auth = firebase.auth()
      export const firestore = firebase.firestore()


      const providerGoogle = new firebase.auth.GoogleAuthProvider()
      providerGoogle.setCustomParameters({promt: 'select_account'})
      export const signInWithGoogle = () => auth.signInWithPopup(providerGoogle)



      const providerFacebook = new FacebookAuthProvider();
      providerFacebook.setCustomParameters({prompt:'select_account'})
      export const signInWithFacebook = () => auth.signInWithPopup(providerFacebook)

      export default firebase
