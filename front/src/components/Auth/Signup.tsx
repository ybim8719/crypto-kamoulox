import { Button } from "antd";
import React, { useContext, useState } from "react";
import { SignupFormData, initialSignupFormData } from "../../models/Auth/Signup/SignupForm";
import { SignupHandler } from "../../models/Auth/Signup/SignupHandler";
import AuthContext from "../../store/auth-context";
import { useNavigate } from "react-router-dom";
import { required, length, email } from "../../utils/validation";
import Input from "../UI/Input";


const Signup: React.FC = () => {
    const [formData, setFormData] = useState<SignupFormData>(initialSignupFormData);
    const [formIsValid, setFormIsValid] = useState<boolean>(false);
    const authCtx = useContext(AuthContext);
    const navigate = useNavigate();
    if (authCtx.isAuth) {
        navigate('/');     
    }

    const onSubmitted = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("form signup submitted");
        signupHandler(e, {email: formData.email.enteredValue, username: formData.username.enteredValue, password: formData.password.enteredValue});
    }

    const inputChangeHandler = (inputId: string, value: string) => {
        if (inputId === "email") {
            const inputIsValid: boolean = required(value) && length({min:6, max: 100})(value) && email(value);
            setFieldsInFormStateByInput(inputId, value, inputIsValid)
        } else if (inputId === "password") {
            const inputIsValid: boolean = required(value) && length({min:8, max: 50})(value);
            setFieldsInFormStateByInput(inputId, value, inputIsValid)
        } else if (inputId === "username") {
            const inputIsValid: boolean = required(value) && length({min:4, max: 50})(value);
            setFieldsInFormStateByInput(inputId, value, inputIsValid)
        }
        checkIfFormIsValid();
    }

    const inputBlurHandler = (inputId: string) => {
        if (["email", "username", "password"].find((el) => el === inputId)) {
            setFormData((prevState) => {
                return {
                    ...prevState,
                    [inputId]: {
                        ...prevState.email,
                        touched: true,
                    }
                }
            })
        }
    }

    const setFieldsInFormStateByInput = (inputId: string, enteredValue: string, isValid: boolean) => {
        setFormData((prevState) => {
            return {
                ...prevState,
                [inputId]: {
                    ...prevState.email,
                    enteredValue: enteredValue,
                    isValid: isValid,
                }
            }
        })  
    }

    const checkIfFormIsValid = () => {
        setFormIsValid(formData.email.isValid && formData.password.isValid && formData.username.isValid);
    }

    const signupHandler: SignupHandler = async (e, authData) => {
        e.preventDefault();
        // todo open modal first saying it was completed !
        navigate('/auth');
    }

    return (
        <div>
            <h1>Enregistrez-vous !</h1>
            <form onSubmit={onSubmitted}>
            <Input
                type="text"
                id="email"
                label="enter email" 
                placeholder="ici"
                value={formData.email.enteredValue}
                required={true}
                onTouched={inputBlurHandler}
                onChanged={inputChangeHandler}
                touched={formData.email.touched}
                />
            <Input
                type="text"
                id="username"
                label="enter username"
                placeholder="ici"
                value={formData.username.enteredValue}
                required={true}
                onTouched={inputBlurHandler}
                onChanged={inputChangeHandler}
                touched={formData.username.touched}
            />
            <Input
                type="text"
                id="password"
                label="enter password"
                placeholder="ici"
                value={formData.password.enteredValue}
                required={true}
                onTouched={inputBlurHandler}
                onChanged={inputChangeHandler}
                touched={formData.password.touched}
            />
            <Button 
                disabled={!formIsValid}
                title="envoyer"
            />
            </form>
        </div>
    )
}

export default Signup;