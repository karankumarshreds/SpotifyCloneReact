import '../styles/login.css';
import { loginUrl } from './spotify';

const Login = () => {
    console.log(loginUrl);
    return (
        <div className="login">
            <img src="/Logo.png" alt="Logo.png" />
            <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
        </div>
    )
};

export default Login;