import firebaseConfig from "./firebase.config"
import { initializeApp } from 'firebase/app'

const FirebaseAuth = () => {
    initializeApp(firebaseConfig);
}
export default FirebaseAuth;