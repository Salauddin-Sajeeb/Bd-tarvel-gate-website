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
            <h1 className="mt-5">Please Log in</h1>
            <button onClick={handleGoogleSignIn} className="btn-primary mt-5"><span><i class="fab fa-google"></i></span> Google sign in</button>
        </div>
    );
};

export default Login;