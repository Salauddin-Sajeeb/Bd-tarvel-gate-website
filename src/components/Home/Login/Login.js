import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/UseAuth';
import Header from '../Header/Header'
const Login = () => {
    const { signInGoogle, user, error } = useAuth()
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home';
    const handleGoogleSignIn = () => {
        signInGoogle()
            .then(result => {
                history.push(redirect_url);
            })
    }

    return (

        <div>
            <Header></Header>
            <button onClick={handleGoogleSignIn} className="btn-primary">Google sign in</button>
        </div>
    );
};

export default Login;