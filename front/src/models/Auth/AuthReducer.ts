export type authReducerState = {
    isAuth: boolean,
    token: null|string, 
    userId: null|string,
}

export type authReducerAction = {
    type: string,
    token?: null|string, 
    userId?: null|string,
}