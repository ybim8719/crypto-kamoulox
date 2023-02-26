export type SignupAuthData = {email: string; username: string; password: string};

export type SignupHandler = (e: React.FormEvent, authData: SignupAuthData) => void;
