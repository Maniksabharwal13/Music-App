import { Login } from "../components/Login"
import React, { useState } from 'react';
import '../App.css';
import { Register } from "../components/Register";
export const Home = () => {
    const [message, setMessage] = useState('');
    const doRegister = () => {
        setMessage('Register');
    }
    const doLogin = () => {
        setMessage('Login');
    }
    if (message === 'Register') {
        return (
            <>
                <Register />
            </>
        )
    }
    else if (message === 'Login') {
        return (
            <>
                <Login />
            </>
        )
    }
    else {
        return (
            <>
                <div className="page">
                    <img className="image" src="https://img.freepik.com/free-vector/blank-blue-halftone-background_53876-99003.jpg?size=626&ext=jpg&ga=GA1.2.2141697159.1629849600" alt="imag" />
                    <div className="sideBar1">
                    </div>
                    <div id="main">
                        <div className="main-1">
                            <i id="icon1" class="fab fa-spotify fa-4x"></i>
                            <h1 className="heading1">Spotify</h1>
                        </div>
                        <div className="main-2">
                            <h1 className="heading2">WELCOME</h1>
                            <button onClick={doLogin} id="homeBtn1" className="homeBtn">Log in</button>
                            <button onClick={doRegister} id="homeBtn2" className="homeBtn">Register</button>
                        </div>
                        <div className="main-3">
                        </div>
                    </div>
                    <div className="sideBar2">
                    </div>
                </div>
            </>
        )
    }
}