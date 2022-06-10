import React, { useState, useCallback, useEffect } from "react";
import axios from "axios";
import '../theme.css';
import './dragon.css';
import image from './dragon.png';
import FooterAdd from '../FooterAdd';
import { useLocation } from "react-router-dom";


const DragonPage = () => {
    const location = useLocation();
    const [dragon, setDragon] = useState({});
    const getDragon = useCallback(async () => {
        const name = location.state.name;
        const response = await axios.get(`http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/?name=${name}`);
        console.log(response.data);
        setDragon(response.data[0]);
        // console.log(location);
    }, [setDragon, location]);

    useEffect(() => {
        getDragon();
    }, [getDragon]);


    return (
        <div id="login" className="App-background">
            <h1>Your Dragon!</h1>
            <div className="dragonBox flex w100">
                <div className="dragonImage block w50">
                    <img src={image} className="icon-home" alt="logo" />
                </div>

                <div className="dragon-characters w50 block jContentCenter">
                    <div className="dragon-name flex w100 mb25">
                        <p className="description">Dragon Name:</p>
                        <p className="dragonName">{dragon.name}</p>
                    </div>
                    <div className="createDate flex w100 mb25">
                        <p className="description">Birth Date:</p>
                        <p className="birthDate">{dragon.createdAt}</p>
                    </div>
                    <div className="dragon-type flex w100 mb25">
                        <p className="description">Characteristics:</p>
                        <p className="dragonType">{dragon.type}</p>
                    </div>
                </div>
            </div>
            <div className="m25">
                <button>Edit Dragon</button>
            </div>
            {/* <div className="dragon-edit w100 block">
                <form>
                    <div className="dragon-name flex w100 mb25 jContentCenter aItemsCenter">
                        <p className="">Dragon Name:</p>
                        <input type="text" placeholder="New Name"></input>
                        <label for="newName" className="" />
                    </div>
                    <div className="dragon-type flex w100 mb25 jContentCenter aItemsCenter">
                        <p className="">Characteristics::</p>
                        <input type="text" placeholder="New Characteristics:"></input>
                        <label for="newName" className="" />
                    </div>
                    <div className="m25">
                        <button>Save it!</button>
                    </div>
                </form>
            </div> */}
            <FooterAdd />
        </div>
    )
}

export default DragonPage