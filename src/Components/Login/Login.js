import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config.js';
import { UserContext } from '../../App.js'
import { useHistory, useLocation } from 'react-router';
import image from '../../google-logo.png';
import './Login.css'

const Login = () => {

    const [signedInUser, setSignedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    } else {
        firebase.app(); // if already initialized, use that one
    }

    const handleGoogleSignIn = () => {

        const provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth()

            .signInWithPopup(provider)

            .then((result) => {
                const { displayName, email } = result.user;
                const user = { name: displayName, email: email };

                setSignedInUser(user);
                history.replace(from);

            })
            .catch((error) => {
                var errorMessage = error.message;
                console.log(errorMessage);
            });
    }

    return (
        <div style={{ height: '100vh' }} className="d-flex align-items-center justify-content-center">
            <div className="text-center">
                <button className="google-btn mb-3" onClick={handleGoogleSignIn}>
                    <img src={image} alt="" /> Sign in with google</button>
                    <p>Please, Sign up for more informations!</p>
            </div>
        </div>
    );
};

export default Login;