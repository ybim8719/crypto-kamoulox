import { PropsWithChildren, useReducer } from 'react';
import { authReducerState, authReducerAction } from '../models/Auth/AuthReducer';
import AuthContext from './auth-context';


const defaultAuthState: authReducerState = {
    isAuth: false,
    token: null, 
    userId: null,
}

// Contains methods for mutating state of reducer by type
const authReducer = (state: authReducerState, action: authReducerAction) => {
    if (action.type === "LOGIN") {
        if (action.userId && action.token) {
            return {
                isAuth: true,
                token: action.token, 
                userId: action.userId,
            }
        }
    }
    if (action.type === "LOGOUT") {
        return {
            isAuth: false,
            token: null, 
            userId: null,
        }
    }

    return defaultAuthState;
}
// return provider to to wrap your Components with
const AuthProvider = (props: PropsWithChildren) => {
    const [authState, dispatchAuthAction] = useReducer(
        authReducer, 
        defaultAuthState
    );
    const setAuthHandler = (userId: string, token: string) => {
        localStorage.setItem('token', token);
        localStorage.setItem('userId', userId);
        const remainingMilliseconds = 60 * 60 * 1000;
        const expiryDate = new Date(
          new Date().getTime() + remainingMilliseconds
        );
        localStorage.setItem('expiryDate', expiryDate.toISOString());
        dispatchAuthAction({type: "LOGIN", userId: userId, token: token})
    }
    const purgeAuthHandler = () => {
        localStorage.removeItem('userId');
        localStorage.removeItem('token');
        localStorage.removeItem('expiryDate');
        dispatchAuthAction({type: "LOGOUT"})
    }

    const setStateFromLocalStorageHandler = () => {
        const token = localStorage.getItem('token');
        const expiryDate = localStorage.getItem('expiryDate');
        const userId = localStorage.getItem('userId');
        if (!token || !expiryDate  || !userId) {
            return;
        }
        if (new Date(expiryDate) <= new Date()) {
            purgeAuthHandler();
            return;
        }
        dispatchAuthAction({type: "LOGIN", userId: userId, token: token})
    }
    
    const authContext = {
        isAuth: authState.isAuth,
        userId: authState.userId,
        token: authState.token,
        setAuthentication: setAuthHandler,
        purgeAuthentication: purgeAuthHandler,
        searchLocalStorage: setStateFromLocalStorageHandler,
    }

    return (
        <AuthContext.Provider value={authContext}>
          {props.children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;