import React, { useState, useCallback, useEffect } from "react";
import axios from "axios";
import '../theme.css';
import './dragon.css';
import image from './dragon.png';
import FooterAdd from '../FooterAdd';
import { useParams, useNavigate } from "react-router-dom";


const DragonPage = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [dragon, setDragon] = useState({});
    const [dragonName, setDragonName] = useState(null);
    const [dragonType, setDragonType] = useState(null);
    const getDragon = useCallback(async () => {
        const id = params.id;
        const response = await axios.get(`http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/${id}`);
        console.log(response.data);
        setDragon(response.data);
        // console.log(location);
    }, [setDragon, params]);

    useEffect(() => {
        getDragon();
    }, [getDragon]);

    const handleUpdateDragon = useCallback(async () => {
        const id = params.id;
        const data = {};
        if (dragonName) {
            data.name = dragonName;
        };
        if (dragonType) {
            data.type = dragonType;
        };
        console.log(data);
        const response = await axios.put(`http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/${id}`, data);
        const { name, type } = response.data;
        setDragonName("");
        setDragonType("");
        setDragon({ ...dragon, name, type });
        // console.log(response.data); Teste de retorno
        // alert(`${dragonName}, ${dragonType}`) Teste de retorno
    }, [params, dragonName, dragonType, setDragonName, setDragonType, dragon, setDragon]);

    const handleDeleteDragon = useCallback(async (id) => {
        const response = await axios.delete(`http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/${id}`);
        console.log(response.data);
        navigate(`/home`);
    }, [navigate]);

    return (
        <div id="login" className="App-background">
            <h1>Dragon Selected!</h1>
            <div className="dragonBox flex w100">
                <div className="dragonImage block w50">
                    <img src={image} className="icon-home" alt="logo" />
                </div>

                <div className="dragon-characters w50 block jContentCenter">
                    <div className="flex w100 mb25">
                        <h2>{dragon.name}</h2>
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
                <button type="button" onClick={() => handleDeleteDragon(dragon.id)}>Delete Dragon!</button>
            </div>

            <div className="dragon-edit w100 block">
                <h3 className="m25">Edit Dragon</h3>
                <form>
                    <div className="dragon-name flex w100 mb25 jContentCenter aItemsCenter">
                        <p className="">Dragon Name:</p>
                        <input type="text" placeholder="New Name" value={dragonName || ""} onChange={evt => setDragonName(evt.target.value)}></input>
                        <label for="newName" className="" />
                    </div>
                    <div className="dragon-type flex w100 mb25 jContentCenter aItemsCenter">
                        <p className="">Characteristics::</p>
                        <input type="text" placeholder="New Characteristics:" value={dragonType || ""} onChange={evt => setDragonType(evt.target.value)}></input>
                        <label for="newName" className="" />
                    </div>
                    <div className="m25">
                        <button type="button" onClick={handleUpdateDragon}>Save it!</button>
                    </div>
                </form>
            </div>
            <FooterAdd />
        </div>
    )
}

export default DragonPage