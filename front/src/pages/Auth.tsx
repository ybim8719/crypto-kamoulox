import { useContext } from "react";
import AuthContext from "../store/auth-context";
import Login from "../components/Auth/Login";
import Signup from "../components/Auth/Signup";


const Auth: React.FC = () => {
    const ctx = useContext(AuthContext);
    const content = ctx.isAuth ? <Login /> : <Signup/>;
    
    return (<div>{content}</div>)
}

export default Auth;