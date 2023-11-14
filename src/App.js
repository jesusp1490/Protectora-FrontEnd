import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './Pages/LoginPage/LoginPage';
import RegisterPage from './Pages/RegisterPage.jsx/RegisterPage';
import UserProfilePage from './Pages/UserProfilePage.jsx/UserProfilePage';
import RegisterPet from './Pages/RegisterPet/RegisterPet';

const App = () => {
  const isAuthenticated = true;

  return (
    <Router>
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/profile" element={<UserProfilePage />} />
            <Route path="/register-pet" element={<RegisterPet />}/>
        </Routes>
    </Router>
);
};

const PrivateRoute = ({ element: Element, isAuthenticated, ...rest }) => (
  isAuthenticated ? <Route {...rest} element={<Element />} /> : <Navigate to="/login" replace />
);

export default App;



