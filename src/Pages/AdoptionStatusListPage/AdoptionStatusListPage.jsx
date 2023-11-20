import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../../Components/Navbar/Navbar';
import PetCard from '../../Components/AdoptionStatus/PetCard/PetCard';


const AdoptionStatusListPage = () => {

    const [forms, setForms] = useState([]);
    const [petDataDict, setPetDataDict] = useState({})

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
                        petDict[form.petName] = petData;
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


    return (

        <div className='petCard-container'>
        <h2 className='petCard-h2'> Tus solicitudes de adopción</h2>

            <ul className="ul-forms">
                {forms.map((form) => (
                    <PetCard key={form.id} form={form} petData={petDataDict[form.petName]} />
                ))}
            </ul >
            <Navbar />
        </div >
    )
}

export default AdoptionStatusListPage
