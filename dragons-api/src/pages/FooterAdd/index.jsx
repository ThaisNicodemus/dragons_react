import React, { useState, useCallback } from "react";
import axios from "axios";
import '../theme.css';
import './footer.css';
import { useNavigate } from "react-router-dom";



const FooterAdd = () => {
    const navigate = useNavigate();
    const [NewDragonName, setNewDragonName] = useState(null);
    const [NewDragonType, setNewDragonType] = useState(null);
    const handleCreateDragon = useCallback(async () => {
        if(!NewDragonName || !NewDragonType) {
            return
        }
        const data = {};
        data.name = NewDragonName;
        data.type = NewDragonType;
        
        // console.log(data);
        await axios.post(`http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/`, data);
        navigate(`/home`);
        
    }, [NewDragonName, NewDragonType, setNewDragonName, setNewDragonType, navigate]);
    return (
        <div id="footerAd" className="footer-background flex w100 jContentCenter aItemsCenter">
            <h1>Add a new Dragon!</h1>
            <div className="addDragonForm flex">
                <form action="" className="dragonCreateForm flex w100 jContentCenter aItemsCenter">
                    <div id="userLogin" className="createDragonField">
                        <label htmlFor="dragonName"></label>
                        <input value={NewDragonName} onChange={evt => setNewDragonName(evt.target.value)} type="text" className="dragonName" name="dragonName" placeholder="Dragon Name" />
                    </div>

                    <div id="dragonType" className="createDragonField">
                        <label htmlFor="dragonType"></label>
                        <input value={NewDragonType} onChange={evt => setNewDragonType(evt.target.value)} type="text" className="dragonType" name="dragonType" placeholder="Dragon Type" />
                    </div>

                    <div className="createDragonButton">
                        <button type="button" onClick={handleCreateDragon}>Create Now!</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FooterAdd