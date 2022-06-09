import React from "react";
import home from './dragon.home.png';
import '../theme.css';
import './login.css';




const LoginPage = () => {
    return (
        <div id="login" className="App-background flex w100">
            <div className="block w50">
                <img src={home} className="img-home" alt="logo" />
                <p>choose your dragons!</p>
            </div>
            <div id="form" className="block w50 jContentCenter">
                <form action="" className="loginForm">
                    <div id="userLogin" className="field">
                        <label htmlFor="userName"></label>
                        <input type="email" className="userName" name="userName" placeholder="email" />
                    </div>

                    <div id="userPassword" className="field">
                        <label htmlFor="userPassword"></label>
                        <input type="password" className="userPassword" name="userPassword" placeholder="password"/>
                    </div>

                    <div className="actions">
                        <button type="submit">Enter</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage