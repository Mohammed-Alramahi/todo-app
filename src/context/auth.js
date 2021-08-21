
import React, { useEffect, useState } from 'react';
import cookie from 'react-cookies';
import jwt from 'jsonwebtoken';
import superagent from 'superagent';
import base64 from 'base-64';
const API = 'https://auth-server-401.herokuapp.com';
export const AuthContext = React.createContext();
function AuthProvider(props) {
    const [user, setUser] = useState({});
    const [token, setToken] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    useEffect(() => {
        const token = cookie.load('auth');
        validateToken(token);
    }, []);
    const validateToken = (token) => {
        if (token !== 'null') {
            const user = jwt.decode(token);
            console.log(token, user);
            setLoginState(true, token, user);
        } else {
            setLoginState(false, null, {});
        }
    };
    const setLoginState = (loggedIn, token, user) => {
        cookie.save('auth', token);
        setLoggedIn(loggedIn);
        setToken(token);
        setUser(user);
    };
    const login = async (username, password) => {
        try {
            const response = await superagent
                .post(`${API}/signin`)
                .set('authorization', `Basic ${base64.encode(`${username}:${password}`)}`);
            validateToken(response.body.token);
        } catch (error) {
            console.error('LOGIN ERROR', error.message);
        }
    };
    const logOut = () => {
        setLoginState(false, null, {});
    };
    const state = {
        loggedIn,
        token,
        user,
        login,
        logOut

    }
    return (
        <AuthContext.Provider value={state}>
            {props.children}
        </AuthContext.Provider>
    );

}
export default AuthProvider;