import React, { useState } from 'react';
import { 
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from "react-router-dom";

import LoginPage from './pages/loginPage';
import HomePage from './pages/homePage';
import DragonPage from './pages/dragonPage';
import { AuthContext } from "./contexts/auth";

const AppRoutes = () => {
    const [user, setUser] = useState(null);

    const login = (email, password) => {
        console.log("login auth", {email, password});
        setUser({id:"123", email});
    };

    const logout = () => {
        console.log("logout");
    };

    return(
        <Router>
            <AuthContext.Provider value={{authenticated: !!user, user, login, logout}}>
                <Routes>
                    <Route exact path="/login" element={<LoginPage/>} />
                    <Route exact path="/home" element={<HomePage/>} />
                    <Route exact path="/dragon" element={<DragonPage/>} />
                </Routes>
            </AuthContext.Provider>
        </Router>
    );
};

export default AppRoutes;