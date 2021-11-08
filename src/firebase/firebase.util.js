import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import { FacebookAuthProvider } from 'firebase/auth'

const config = {
    apiKey: 'AIzaSyCKMjMahMKeS3YNCB9ObTpZ2C0zXNspaPQ',
    authDomain: 'trend-wearz.firebaseapp.com',
    projectId: 'trend-wearz',
    storageBucket: 'trend-wearz.appspot.com',
    messagingSenderId: '74899697581',
    appId: '1:74899697581:web:4abb494ec286d3ee65bb24',
    measurementId: 'G-CTCGE9FCNT',
}
firebase.initializeApp(config)

//storing the logged in user to firestore
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get()

    console.log(snapShot)

    if (!snapShot.exists) {
        const { displayName, email } = userAuth
        const createdAt = new Date()
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData,
            })
        } catch (error) {
            console.log('error creating user', error.message)
        }
    }

    return userRef
}

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const providerGoogle = new firebase.auth.GoogleAuthProvider()
providerGoogle.setCustomParameters({ promt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(providerGoogle)

const providerFacebook = new FacebookAuthProvider()
providerFacebook.setCustomParameters({ prompt: 'select_account' })
export const signInWithFacebook = () => auth.signInWithPopup(providerFacebook)

export default firebase
