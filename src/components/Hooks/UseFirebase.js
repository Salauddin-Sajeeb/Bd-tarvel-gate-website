import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import FirebaseAuth from '../Home/Firebase/firebase.init';
FirebaseAuth();
const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState('')
    const [error, setError] = useState([])

    const [isLoading, setIsloading] = useState(true)

    const googleProvider = new GoogleAuthProvider();
    const signInGoogle = () => {
        setIsloading(true);
        return signInWithPopup(auth, googleProvider)

    }
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsloading(false);
        });
        return () => unsubscribed;
    }, [])


    const logout = () => {
        signOut(auth)
            .then(() => {
                setUser('')
            })
    }


    return {

        logout, signInGoogle, user, error, isLoading
    }
};
export default useFirebase;