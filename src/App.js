import React from 'react';
import './Styles/Main/styles.scss';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './Pages/LoginPage/LoginPage';
import RegisterPage from './Pages/RegisterPage/RegisterPage';
import UserProfilePage from './Pages/UserProfilePage/UserProfilePage';
import RegisterPet from './Pages/RegisterPet/RegisterPet';
import MasPage from './Pages/MasPage/MasPage';
import UpdatePet from './Pages/UpdatePet/UpdatePet'
import RegisterProtectora from './Pages/Protectoras/RegisterProtectora/RegisterProtectora';
import LoginProtectora from './Pages/Protectoras/LoginProtectora/LoginProtectora';
import HomePage from './Pages/HomePage/HomePage';
import MapasPage from './Pages/MapasPage/MapasPage';
import ProfileProtectora from './Pages/Protectoras/ProfileProtectora/ProfileProtectora';
import UpdateProtectora from './Pages/Protectoras/UpdateProtectora/UpdateProtectora';
import OnboardingPage from './Pages/OnboardingPage/OnboardingPage';
import LoginOptionsPage from './Pages/LoginOptionsPage/LoginOptionsPage';


const App = () => {
  const isAuthenticated = true;

  return (
    <Router>
        <Routes>
            <Route path="/" element={<OnboardingPage />} />
            <Route path="/login-options" element={<LoginOptionsPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/profile" element={<UserProfilePage />} />
            <Route path="/register-pet" element={<RegisterPet />}/>
            <Route path="/mapa" element={<MapasPage />} />
            <Route path="/mas" element={<MasPage />} />
            <Route path="/update-pet/:petId" element={<UpdatePet />}/>
            <Route path="/register-protectora" element={<RegisterProtectora/>}/>
            <Route path="/login-protectora" element={<LoginProtectora/>}/>
            <Route path="/profile-protectora" element={<ProfileProtectora/>}/>
            <Route path="/update-protectora/:protectoraId" element={<UpdateProtectora/>}/>
        </Routes>
    </Router>
);
};

const PrivateRoute = ({ element: Element, isAuthenticated, ...rest }) => (
  isAuthenticated ? <Route {...rest} element={<Element />} /> : <Navigate to="/login" replace />
);

export default App;



