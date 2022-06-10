import React, { useState, useContext } from "react";
import home from './dragon.home.png';
import './login.css';
import '../theme.css';
import { AuthContext } from "../../contexts/auth";
import { useNavigate } from "react-router-dom";


const LoginPage = () => {
    const { authenticated, login } = useContext (AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorLogin, setErrorLogin] = useState("");
    const navigate = useNavigate();
    const handleLogin = (evt) => {
        evt.preventDefault();

        console.log('submit', {email, password});
        const result = login(email, password); // integração com meu auth e api
        if(!result) {
            setErrorLogin ("Error Password!");
            return;
        }
        navigate("/home");
    };
    return (
        <div id="login" className="App-background flex w100">
            <div className="block w50 jContentCenter">
                <img src={home} className="img-home" alt="logo" />
                <p>choose your dragons!</p>
                {/* <p>{String(authenticated)}</p> usado pra testes */}
            </div>
            <div id="form" className="block w50 jContentCenter">
                <form action="" className="loginForm w100" onSubmit={handleLogin}>
                    <div id="userLogin" className="field">
                        <label htmlFor="userName"></label>
                        <input
                            type="email"
                            id="name"
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
                            id="password"
                            name="userPassword"
                            placeholder="password"
                            value={password}
                            onChange={(evt) => setPassword(evt.target.value)}
                        />
                        {errorLogin !== "" && <span>{errorLogin}</span>}
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