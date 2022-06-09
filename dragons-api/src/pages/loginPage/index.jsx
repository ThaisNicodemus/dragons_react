import React, { useState } from "react";
import home from './dragon.home.png';
import '../theme.css';
import './login.css';




const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (evt) => {
        evt.preventDefault();

        console.log('submit', {email, password});
    };
    return (
        <div id="login" className="App-background flex w100">
            <div className="block w50 jContentCenter">
                <img src={home} className="img-home" alt="logo" />
                <p>choose your dragons!</p>
            </div>
            <div id="form" className="block w50 jContentCenter">
                <form action="" className="loginForm w100" onSubmit={handleLogin}>
                    <div id="userLogin" className="field">
                        <label htmlFor="userName"></label>
                        <input
                            type="email"
                            id="userName"
                            name="userName"
                            placeholder="email"
                            value={email}
                            onChange={(evt) => setEmail(evt.target.value)}
                        />
                    </div>

                    <div id="userPassword" className="field">
                        <label htmlFor="userPassword"></label>
                        <input 
                            type="password"
                            id="userPassword"
                            name="userPassword"
                            placeholder="password"
                            value={password}
                            onChange={(evt) => setPassword(evt.target.value)}
                        />
                    </div>

                    <div className="actions">
                        <button type="submit">Choose Now!</button>
                    </div>
                </form>

                <div className="info">
                    <p>You are automatically registered by entering your email and password.</p>
                    <p>Você será automaticamente registrado ao inserir seu email e senha.</p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage