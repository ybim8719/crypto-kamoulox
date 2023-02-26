export type SignupFormData = {
    email: {
        enteredValue : string;
        isValid : boolean;
        touched : boolean;
    },
    username: {
        enteredValue : string;
        isValid : boolean;
        touched : boolean;
    },
    password: {
        enteredValue : string;
        isValid : boolean;
        touched : boolean;
    },
}

export const initialSignupFormData= {
    email: {
        enteredValue : "",
        isValid : false,
        touched : false,
    },
    username: {
        enteredValue : "",
        isValid : false,
        touched : false,
    },
    password: {
        enteredValue : "",
        isValid : false,
        touched : false,
    },
}