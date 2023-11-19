import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../../Components/Navbar/Navbar';


const AdoptionStatusListPage = () => {

    const [forms, setForms] = useState([]);
    const [username, setUsername] = useState('');
    const [petDataDict, setPetDataDict] = useState({})

    const email = localStorage.getItem('userEmail')


    useEffect(() => {
        const getUserData = async () => {
            const { data } = await axios(`http://localhost:5055/users/${email}`)
            console.log('data', data)
            setUsername(data[0].username)
        }
        if (email) {
            getUserData();
        }
    }, [email])

    console.log(username)
    

    useEffect(() => {
        const getPepino = async () => {
            try {
                const formsResponse = await axios.get(`http://localhost:5055/forms/getByUsername/${username}`);
                const formsData = formsResponse.data;

                const petDict = {};

                for (const form of formsData) {
                    if (!petDict[form.petName]) {
                        const petResponse = await axios.get(
                            `http://localhost:5055/pets/getName/${form.petName}`
                        );
                        const petData = petResponse.data[0];
                        petDict[form.petName] = petData;
                        console.log('petData:', petData);
                        console.log(form._id)
                    }

                    // if (petDict[form.petName]?.user === userUsername) {
                    //     filteredForms.push(form)

                    // }
                }


                console.log("Pet Dict:", petDict);
                // console.log("Filtered Forms:", filteredForms);

                setPetDataDict(petDict);
                // setForms(filteredForms);
                console.log(forms)


            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        getPepino();

    }, [username]);

    return (

        <div className='petCard-container'>
        <h2 className="list-title"> Tus solicitudes de adopción</h2>

            <ul className="ul-forms">
                {forms.map((form) => (
                    <li key={form.id} className="form-card">
                            <h3 className='petCard-h3'>Adopción de {form.petName} 
                                {/* <img 
                                src='https://res.cloudinary.com/dizd9f3ky/image/upload/v1699831804/arrow_2x_cszuw5.png' 
                                alt='arrowDown' 
                                className='petCard-img' 
                                /> */}
                            </h3>
                        <div className='petCard-info'>
                        {/* <img src={petDataDict[form.petName]?.image} alt="Pet" className="petPic" /> */}
                            <p className='petCard-p'>Ciudad: {form.city}</p>
                            <p className='petCard-p'>Sexo: {form.petName}</p>
                        </div>

                    </li >
                ))}
            </ul >
            <Navbar />
        </div >
    )
}

export default AdoptionStatusListPage
