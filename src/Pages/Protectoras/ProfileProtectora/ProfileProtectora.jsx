import React, {useState, useEffect} from 'react'; 
import { Link } from 'react-router-dom';
import axios from "axios";

const ProfileProtectora = () => {
    const [datas, setDatas] = useState({})

    const profileID = localStorage.getItem('protectoraID')

    useEffect(() => {
    const getData = async() =>{
    const {data} = await axios(`http://localhost:5055/protectoras/${profileID}`)
    console.log(data)
    setDatas(data)
    }
    if (profileID) {
        getData();
      }
}, [profileID])
    
   
    console.log(profileID)

    return(
        <div className='userProfile-container'>
        <div>
            <img src={datas.image} alt="Profile"/>
        </div>
        <div>
            <h2>{datas.name}</h2>
        </div>
        <div>
        <h4>Dirección:</h4>
            <p>{datas.street} número {datas.number}, {datas.city}</p>
        </div>
        <div>
            <p>{datas.phone}</p>
        </div>
        <Link to={`/update-protectora/${profileID}`}>
            <button type='button'>Editar información</button>
        </Link>
        </div>
    )
};

export default ProfileProtectora;