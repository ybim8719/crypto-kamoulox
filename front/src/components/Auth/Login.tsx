import React, { useState, useContext } from 'react'
import Button from '../../components/UI/Button';
import Input from '../../components/UI/Input';
import classes from './Login.module.css';
import { LoginHandler } from '../../models/Auth/LoginHandler';
import { length, required, email } from '../../utils/validation';
import AuthContext from '../../store/auth-context';
import { sendGraphQlLoginQuery } from '../../api/requests/tobackend';
import { useNavigate } from "react-router-dom";


const Login: React.FC = () => {
  const [emailInputTouched, setEmailInputTouched] = useState<boolean>(false);
  const [passwordInputTouched, setPasswordInputTouched] = useState<boolean>(false);
  const [enteredEmail, setEnteredEmail] = useState<string>("");
  const [enteredPassword, setEnteredPassword] = useState<string>("");
  const [enteredEmailIsValid, setEnteredEmailIsValid] = useState<boolean>(false);
  const [enteredPasswordIsValid, setEnteredPasswordIsValid] = useState<boolean>(false);
  const [formIsValid, setFormIsValid] = useState<boolean>(false)
  
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  if (authCtx.isAuth) {
    navigate('/');
  }

  const onSubmitted = (e: React.FormEvent) => {
    e.preventDefault();
    logInHandler(e, {email: enteredEmail, password: enteredPassword});
  }

  const inputChangeHandler = (inputId: string, value: string) => {
    if (inputId === "email") {
      setEnteredEmail(value);
      const emailIsValid: boolean = required(value) && length({min:6, max: 100})(value) && email(value);
      setEnteredEmailIsValid(emailIsValid)
    } else if (inputId === "password") {
      setEnteredPassword(value);
      const inputIsValid: boolean = required(value) && length({min:8, max: 50})(value);
      setEnteredPasswordIsValid(inputIsValid)
    }
    checkIfFormIsValid();
  }

  const inputBlurHandler = (inputId: string) => {
    if (inputId === "email") {
      setEmailInputTouched(true);
    } else if (inputId === "password") {
      setPasswordInputTouched(true);
    }
  }

  const checkIfFormIsValid = () => {
    setFormIsValid(enteredEmailIsValid && enteredPasswordIsValid)
  }

  const logInHandler: LoginHandler = async (e, authData) => {
    e.preventDefault();
    try {
      const resData = await sendGraphQlLoginQuery(authData);
      if (resData.errors && resData.errors[0].status === 422) {
        throw new Error("Validation failed. Make sure the email address isn't used yet!");
      }
      if (resData.errors) {
          throw new Error('User login failed!');
      }
      if (resData.data && resData.data.login) {
        authCtx.setAuthentication(resData.data.login.userId, resData.data.login.token);
      }
    } catch (error) {
      throw new Error('User login failed!');
    }
  }

  return (
    <section className={classes.authForm}>
      <h1>Identifiez-vous!</h1>
      <form onSubmit={onSubmitted}>
        <Input
          type="text"
          id="email"
          label="enter email" 
          placeholder="ici"
          value={enteredEmail}
          required={true}
          onTouched={inputBlurHandler}
          onChanged={inputChangeHandler}
          touched={emailInputTouched}
        />
        <Input
            type="text"
            id="password"
            label="enter password"
            placeholder="ici"
            value={enteredPassword}
            required={true}
            onTouched={inputBlurHandler}
            onChanged={inputChangeHandler}
            touched={passwordInputTouched}
            />
        <Button 
          disabled={!formIsValid}
          title="envoyer"
        />
      </form>
    </section>
  )
}

export default Login;