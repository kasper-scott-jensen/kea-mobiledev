import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDojtpniwO7tlF5WQa1OEu2I2C6yCkARI8",
    authDomain: "mobiledev-exam.firebaseapp.com",
    projectId: "mobiledev-exam",
    storageBucket: "mobiledev-exam.appspot.com",
    messagingSenderId: "418933074230",
    appId: "1:418933074230:web:123722b2e6c74c3951ab97",
    measurementId: "G-8CHNRNM2WP"
}

firebase.initializeApp(firebaseConfig)

export { firebase }
