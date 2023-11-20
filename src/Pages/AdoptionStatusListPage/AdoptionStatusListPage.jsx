import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../../Components/Navbar/Navbar';
import { Link } from 'react-router-dom';
import './_AdoptionStatusListPage.scss'


const AdoptionStatusListPage = () => {

    const [forms, setForms] = useState([]);
    const [petDataDict, setPetDataDict] = useState({})
    const [petCom, setPetCom] = useState({});

    const username = localStorage.getItem('userUsername')

    useEffect(() => {
        const getPepino = async () => {
            try {
                const formsResponse = await axios.get(
                    `http://localhost:5055/forms/getByUsername/${username}`
                );
                const formsData = formsResponse.data;
                setForms(formsData)

                const petDict = {};

                for (const form of formsData) {
                    if (!petDict[form.petName]) {
                        const petResponse = await axios.get(
                            `http://localhost:5055/pets/getName/${form.petName}`
                        );
                        const petData = petResponse.data[0];
                        setPetCom(petData)
                        petDict[form.petName] = {
                            city: petData.city,
                            name: petData.name,
                            image: petData.image,
                            age: petData.age,
                            sex: petData.sex
                        };
                        console.log('petData:', petData);
                        console.log(form._id)
                    }

                }
                console.log("Pet Dict:", petDict);
                setPetDataDict(petDict);
                console.log(forms)


            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        getPepino();

    }, [username]);
    console.log(petDataDict.id)
    console.log(petCom._id)
    return (

        <div className='petCard-container'>
            <h2 className='petCard-h2'> Tus solicitudes de adopción</h2>

            <ul className="ul-forms">

                {forms.map((form) => (
                    <li className="petCard-card">
                        <Link to={`/adoption-status/${petCom._id}`} key={petCom._id} className="link-card">
                            <div className='petCard-header'>
                                <h3 className='petCard-h3'>Adopción de {form.petName}</h3>
                                <div className='petCard-status'>
                                    <p className='petCard-statusp'>{form.status} </p>
                                    <img src='https://res.cloudinary.com/dizd9f3ky/image/upload/v1700402941/oval_2x_v2wbdo.png' alt='Status-Color' className='petCard-statusColor' />
                                </div>
                            </div>

                            <div className='petCard-info'>
                                <img src={petDataDict[form.petName]?.image} alt="Pet" className="petCard-img" />
                                <div className='petCard-text'>
                                    <p className='petCard-p'><span className='petCard-span'>Nombre:</span> {form.petName}</p>
                                    <p className='petCard-p'><span className='petCard-span'>Ciudad:</span> {petDataDict[form.petName]?.city}</p>
                                    <p className='petCard-p'><span className='petCard-span'>Sexo:</span> {petDataDict[form.petName]?.sex}</p>
                                </div>
                            </div>
                        </Link>
                    </li>
                ))}

            </ul >
            <Navbar />
        </div >
    )
}

export default AdoptionStatusListPage