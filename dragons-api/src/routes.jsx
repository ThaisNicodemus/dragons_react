import React, { useContext } from 'react';
import { 
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from "react-router-dom";
import LoginPage from './pages/loginPage';
import HomePage from './pages/homePage';
import DragonPage from './pages/dragonPage';
import { AuthProvider, AuthContext } from "./contexts/auth";

const AppRoutes = () => {
    const Private = ({children}) => {
        const { authenticated } = useContext(AuthContext);

        if(!authenticated) {
            return <Navigate to='/login' />;
        }

        return children;
    }
    return(
        <Router>
            <AuthProvider>
                <Routes>
                    <Route exact path="/login" element={<LoginPage/>} />
                    <Route exact path="/home" element={<Private><HomePage/></Private>} />
                    <Route exact path="/dragon/:name" element={<DragonPage/>} />
                </Routes>
            </AuthProvider>
        </Router>
    );
};

export default AppRoutes;