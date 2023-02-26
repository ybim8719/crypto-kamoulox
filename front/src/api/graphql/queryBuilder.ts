import { LoginAuthData } from "../../models/Auth/LoginHandler"
import { SignupAuthData } from "../../models/Auth/Signup/SignupHandler"

export const buildLoginQuery = (authData: LoginAuthData) => {
    return {
        query: `
            query UserLogin($email: String!, $password: String!) {
                login(email: $email, password: $password) {
                token,
                userId
                }
            }
        `,
        variables: {
            email: authData.email,
            password: authData.password,
        } 
    }
}


export const buildSignupQuery = (authData: SignupAuthData) => {
    return {
        query: `
            mutation CreateNewUser($email: String!, $name: String!, $password: String!) {
                createUser(userInput: {email: $email, name: $name, password: $password}) {
                _id
                email
                }
            }
        `,
        variables: {
            email: authData.email,
            username: authData.username,
            password: authData.password
        } 
    }
}