import React from 'react';

type AuthContextType = {
    isAuth: boolean,
    userId: string|null,
    token: string|null,
    setAuthentication: (userId : string, token: string) => void,
    purgeAuthentication: () => void,
    searchLocalStorage: () => void,
}

const AuthContext = React.createContext<AuthContextType>({
    isAuth: false,
    userId: null,
    token: null,
    setAuthentication: (userId : string, token: string) => {},
    purgeAuthentication: () => {},
    searchLocalStorage: () => {},
});

export default AuthContext;