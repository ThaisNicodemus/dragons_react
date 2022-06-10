import React from 'react';
import { 
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from "react-router-dom";

import LoginPage from './pages/loginPage';
import HomePage from './pages/homePage';
import DragonPage from './pages/dragonPage';
import { AuthProvider } from "./contexts/auth";

const AppRoutes = () => {
    return(
        <Router>
            <AuthProvider>
                <Routes>
                    <Route exact path="/login" element={<LoginPage/>} />
                    <Route exact path="/home" element={<HomePage/>} />
                    <Route exact path="/dragon" element={<DragonPage/>} />
                </Routes>
            </AuthProvider>
        </Router>
    );
};

export default AppRoutes;