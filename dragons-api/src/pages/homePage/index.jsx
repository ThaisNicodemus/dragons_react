import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import icon from './dragon.icon.png';
import '../theme.css';
import './home.css';
import FooterAdd from '../FooterAdd';
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const [dragonList, setDragonList] = useState([]);
    const navigate = useNavigate();
    const handleClick = (id) => {
        navigate(`/dragon/${id}`, {state:{id}});
    };

    const getDragons = useCallback(async () => {
        const response = await axios.get("http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon");
        // console.log(response.data);
        const list = response.data.sort((dragonA,dragonB)=> dragonA.name > dragonB.name ?1:-1);
        setDragonList(list);
    }, [setDragonList]);

    useEffect(() => {
        getDragons();
    }, [getDragons]);

    return (
        <div id="login" className="App-background">
            <div>
                <h1>Choose Your Dragon!</h1>
            </div>

            <div>
                <ul>
                    {dragonList.map((dragon) => (
                        <li className="w100 flex jContentStart aItemsCenter" key={dragon.id}>
                            <button className="dragon-button flex jContentCenter aItemsCenter" type="button" onClick={()=>handleClick(dragon.id)}>
                                <img src={icon} className="icon-home" alt="logo" />
                                {dragon.name}
                            </button>
                        </li>
                    ))
                    }
                </ul>
            </div>
            <FooterAdd />
        </div>
    )
}

export default HomePage