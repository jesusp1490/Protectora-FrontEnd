import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './Pages/LoginPage/LoginPage';
import RegisterPage from './Pages/RegisterPage/RegisterPage';
import UserProfilePage from './Pages/UserProfilePage/UserProfilePage';
import RegisterPet from './Pages/RegisterPet/RegisterPet';
import './Styles/Main/styles.scss';
import MasPage from './Pages/MasPage/MasPage';
import UpdatePet from './Pages/UpdatePet/UpdatePet'
import HomePage from './Pages/HomePage/HomePage';
import MapasPage from './Pages/MapasPage/MapasPage';

const App = () => {
  const isAuthenticated = true;

  return (
    <Router>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/profile" element={<UserProfilePage />} />
            <Route path="/register-pet" element={<RegisterPet />}/>
            <Route path="/mapa" element={<MapasPage />} />
            <Route path="/mas" element={<MasPage />} />
            <Route path="/update-pet/:petId" element={<UpdatePet />}/>
        </Routes>
    </Router>
);
};

const PrivateRoute = ({ element: Element, isAuthenticated, ...rest }) => (
  isAuthenticated ? <Route {...rest} element={<Element />} /> : <Navigate to="/login" replace />
);

export default App;



