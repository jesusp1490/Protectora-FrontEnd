import React, { useEffect, useState } from "react";
import axios from "axios";
import './_FormList.scss'
import Navbar from "../../../Components/NavbarProtectora/NavbarProtectora";
import { Link } from "react-router-dom";

const FormList = () => {
    const [forms, setForms] = useState([]);
    const [petDataDict, setPetDataDict] = useState({})
    const protectoraID = localStorage.getItem('protectoraID')
    const [protectoraName, setProtectoraName] = useState('')

    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(`http://localhost:5055/protectoras/${protectoraID}`)
            console.log(data)
            setProtectoraName(data.name)
        }
        if (protectoraID) {
            getData();
        }
    }, [protectoraID])


    useEffect(() => {
        const getData = async () => {
            try {
                const formsResponse = await axios.get("http://localhost:5055/forms");
                const formsData = formsResponse.data;

                const petDict = {};
                const filteredForms = [];

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

                    if (petDict[form.petName]?.protectora === protectoraName) {
                        filteredForms.push(form)

                    }
                }


                console.log("Pet Dict:", petDict);
                console.log("Filtered Forms:", filteredForms);

                setPetDataDict(petDict);
                setForms(filteredForms);
                console.log(forms)


            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        getData();

    }, [protectoraName]);



    return (
        <div className="list-container">
            <h2 className="list-title">Peticiones de adopción</h2>
            <ul className="ul-forms">
                {forms.map((form) => (
                    <li key={form.id} className="form-card">
                        <div className="left-content">

                            <div className="ownerName">
                                {form.fullName},
                                <span>quiere adoptar a:</span>
                                <p className="form-petName">{form.petName}</p>
                            </div>

                            <Link to={`/review-form/${form._id}`} className="review-link">
                                <p className="review">
                                <img src="https://res.cloudinary.com/dizd9f3ky/image/upload/v1700336178/email_2x_dagg1i.png" alt="sobre-icon" className="review-icon"/>
                                Review form 
                                </p>
                            </Link>

                        </div>

                        <div className="right-content">
                            <div className="pet-data">

                                <div className="div-img">
                                    <img src={petDataDict[form.petName]?.image} alt="Pet" className="petPic" />
                                </div>

                            </div>

                        </div>
                    </li>
                ))}
            </ul>
            <Navbar />
        </div>
    )

}

export default FormList;