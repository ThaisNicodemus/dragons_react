import React from "react";
import icon from './dragon.icon.png';
import '../theme.css';
import './home.css';
import DragonPage from '../dragonPage/index.jsx';
import FooterAdd from '../FooterAdd';

const HomePage = () => {
    return (
        <div id="login" className="App-background">
            <div>
                <h1>Choose Your Dragon!</h1>
            </div>

            <div>
                <ul>
                    <li className="w100 flex jContentCenter aItemsCenter">
                        <button className="dragon-button flex jContentCenter aItemsCenter">
                            <img src={icon} className="icon-home" alt="logo" />
                            Dragão boladão!
                        </button>
                    </li>
                    
                </ul>
            </div>
            <FooterAdd />
        </div>
    )
}

export default HomePage