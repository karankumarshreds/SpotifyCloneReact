import '../styles/global.css';
import Login from '../components/login';
import { useEffect, useState } from 'react';
import { getToken } from '../components/spotify';

const LandingPage = () => {
    const [authToken, setAuthToken] = useState(undefined);
    useEffect(() => {
        const token = getToken();
        if (token) {
            setAuthToken(token);
            // clear the token from the url
            window.location.hash = "";
        }
    }, []);

    return (
        <div>
            {authToken ?
                <h1>Welcome</h1>
                :
                <div>
                    <Login />
                </div>
            }
        </div>
    )
};

export default LandingPage;