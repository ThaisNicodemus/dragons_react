import React from "react";
import icon from './dragon.icon.png';
import '../theme.css';
import './home.css';


const HomePage = () => {
    return (
        <div id="login" className="App-background">
            <h1>Choose Your Dragon!</h1>
            <ul>
                <li>
                    <a href="#" className="dragon-link">
                        <img src={icon} className="icon-home" alt="logo" />
                    
                    Dragão boladão!
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default HomePage