import React, {useEffect, useState} from "react";
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

                for (const form of formsData){
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

    

    return(
        <div className="list-container">
            <h2 className="list-title">Peticiones de adopción</h2>
            <ul className="ul-forms">
                {forms.map((form) =>(
                    <li key={form.id} className="form-card">
                    <div className="ownerName">
                        {form.fullName}
                    </div>
                         would like to adopt 
                        <div className="pet-data">
                        <p className="form-petName">{form.petName}</p>
                            <div className="div-img">
                            <img src={petDataDict[form.petName]?.image} alt="Pet" className="petPic"/>
                            </div>  
                        </div>
                        <Link to={`/review-form/${form._id}`}>
                        <p className="review">Review form</p>
                        </Link>
                    </li>
                ))}
            </ul>
            <Navbar/>
        </div>
    )

}

export default FormList;