import React from "react";
import '../theme.css';
import './footer.css';


const FooterAdd = () => {
    return (
        <div id="footerAd" className="footer-background flex w100 jContentCenter aItemsCenter">
            <h1>Add a new Dragon!</h1>
            <div className="addDragonForm flex">
                <form action="" className="dragonForm flex w100 jContentCenter aItemsCenter">
                    <div id="userLogin" className="field">
                        <label htmlFor="dragonName"></label>
                        <input type="text" className="dragonName" name="dragonName" placeholder="Dragon Name" />
                    </div>

                    <div id="dragonType" className="field">
                        <label htmlFor="dragonType"></label>
                        <input type="text" className="dragonType" name="dragonType" placeholder="Dragon Type" />
                    </div>

                    <div className="actions">
                        <button type="submit">Create Now!</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FooterAdd