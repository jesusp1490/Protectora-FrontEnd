import React from 'react';
import './Styles/Main/styles.scss';
import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import LoginPage from './Pages/LoginPage/LoginPage';
import RegisterPage from './Pages/RegisterPage/RegisterPage';
import UserProfilePage from './Pages/UserProfilePage/UserProfilePage';
import RegisterPet from './Pages/Protectoras/RegisterPet/RegisterPet';
import MasPage from './Pages/MasPage/MasPage';
import UpdatePet from './Pages/Protectoras/UpdatePet/UpdatePet'
import RegisterProtectora from './Pages/Protectoras/RegisterProtectora/RegisterProtectora';
import LoginProtectora from './Pages/Protectoras/LoginProtectora/LoginProtectora';
import HomePage from './Pages/HomePage/HomePage';
import MapasPage from './Pages/MapasPage/MapasPage';
import AnimalesAdoption from './Pages/AnimalesAdoption/AnimalesAdoption';
import Filtros from './Components/Filtros/filtros';
import ProfileProtectora from './Pages/Protectoras/ProfileProtectora/ProfileProtectora';
import UpdateProtectora from './Pages/Protectoras/UpdateProtectora/UpdateProtectora';
import Formulario from './Pages/Formulario/Formulario';
import OnboardingPage from './Pages/OnboardingPage/OnboardingPage';
import LoginOptionsPage from './Pages/LoginOptionsPage/LoginOptionsPage';
import HomePageProtectora from './Pages/Protectoras/HomePage/HomePageProtectora';
import UserProfile from './Pages/Usuario/UserProfile';
import UpdateUser from './Pages/Usuario/UpdateUser';
import FormList from './Pages/Protectoras/FormList/FormList';
import ReviewForm from './Pages/Protectoras/ReviewForm/ReviewForm';
import AdoptionStatusPage from './Pages/AdoptionStatusPage/AdoptionStatusPage';
import MasProtectora from './Pages/MasProtectora/MasProtectora';
import AdoptionStatusListPage from './Pages/AdoptionStatusListPage/AdoptionStatusListPage';
import HelpPage from './Pages/HelpPage/HelpPage';
import PetProfile from './Pages/PetProfile/PetProfile';
import Curiosity from './Pages/Curiosity/Curiosity';



const App = () => {
  // const isAuthenticated = true;

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
            <Route path="/animales-adoption" element={<AnimalesAdoption/>}/>
            <Route path="/filtros" element={<Filtros/>}/>
            <Route path="/profile-protectora" element={<ProfileProtectora/>}/>
            <Route path="/update-protectora/:protectoraId" element={<UpdateProtectora/>}/>
            <Route path="/send-form" element={<Formulario/>}/>
            <Route path="/home-protectora" element= {<HomePageProtectora />}/>
            <Route path="/mi-perfil" element={<UserProfile/>}/>
            <Route path="/update-usuario/:userId" element={<UpdateUser/>}/>
            <Route path="/forms-list" element= {<FormList/>}/>
            <Route path="/review-form/:id" element={<ReviewForm/>}/>
            <Route path="/adoption-status/:id" element={<AdoptionStatusPage />}/>
            <Route path="mas-protectora" element={<MasProtectora/>}/>
            <Route path='/adoption-status-list' element={<AdoptionStatusListPage/>} />
            <Route path='/ayuda' element={<HelpPage/>} />
            <Route path='/pet-profile/:petId' element={<PetProfile/>}/>
            <Route path="/curiosity" element={<Curiosity/>}/>
        </Routes>
    </Router>
  );
};

// // const PrivateRoute = ({ element: Element, isAuthenticated, ...rest }) => (
// //   isAuthenticated ? <Route {...rest} element={<Element />} /> : <Navigate to="/login" replace />
// );

export default App;



