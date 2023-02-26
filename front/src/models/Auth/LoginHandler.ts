export type LoginAuthData = {email: string, password: string};

export type LoginHandler = (e: React.FormEvent, authData: LoginAuthData) => void;
