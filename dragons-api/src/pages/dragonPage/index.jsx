import React from "react";
import '../theme.css';
import './dragon.css';
import image from './dragon.png';


const DragonPage = () => {
    return (
        <div id="login" className="App-background">
            <h1>Your Dragon!</h1>
            <div className="dragonBox flex w100">
                <div className="dragonImage block w50">
                    <img src={image} className="icon-home" alt="logo" />
                </div>

                <div className="dragon-characters w50 block jContentCenter">
                    <div className="dragon-name flex w100">
                        <p className="description">Dragon Name:</p>
                        <p className="dragonName">Torturador</p>
                    </div>
                    <div className="createDate flex w100">
                        <p className="description">Birth Date:</p>
                        <p className="birthDate">22/02/2022</p>
                    </div>
                    <div className="dragon-type flex w100">
                        <p className="description">Characteristics:</p>
                        <p className="dragonType">lilas</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default DragonPage