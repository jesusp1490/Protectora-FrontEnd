import React, {useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ReviewForm = () => {
const [datas, setDatas] = useState({})
const [status, setStatus] = useState('')
const formID = useParams().id

console.log(formID)

    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(`http://localhost:5055/forms/getByID/${formID}`)
            console.log(data)
            setDatas(data)
        }
        if (formID) {
            getData();
        }
    }, [formID])

    const handleAccept = async (event) => {
        event.preventDefault();
        setStatus('accepted');
      };
      
      const handleDeny = async (event) => {
        event.preventDefault();
        setStatus('denied');
      };

      useEffect(() => {
        // This effect will run once when the component mounts
        // and whenever 'status' changes
        if (status !== '') {
          handleUpdateForm();
        }
      }, [status]);

    const handleUpdateForm = async () => {
        try {
          const response = await axios.put(
            `http://localhost:5055/forms/updateForm/${formID}`,
            { status }
          );
          const moredata = response.data;
      
          if (moredata) {
            console.log('Actualizado con éxito');
            window.location.reload();
          } else {
            console.error(response.data.message);
            alert('No se ha podido actualizar');
          }
        } catch (error) {
          console.error('Error updating form:', error);
          alert('Error updating form');
        }
      };

    console.log(datas.status)

    return(
        <div className="form-review-container">
            <h2>Formulario de {datas.fullName} para adoptar a {datas.petName}</h2>
            <div>
                <h3>Datos de contacto:</h3>
                <h5>Dirección:</h5>
                <p>{datas.address}, {datas.postalCode}, {datas.city}</p>
                <h5>Teléfono:</h5>
                <p>{datas.phoneNumber}</p>
                <h5>Email:</h5>
                <p>{datas.email}</p>
                <h5>DNI:</h5>
                <p>{datas.dni}</p>

                <h3>Mascotas:</h3>
                <h5>¿Tiene otras mascotas?</h5>
                <p>{datas.otherPets === true ? 'Sí' : 'No'}</p>
                <p>{datas.whatPets ? `${datas.whatPets}` : '' }</p>
                {datas.social ? (
                    <div>
                    <h5>¿Se llevan bien con otros animales?</h5>
                    <p>{datas.social}</p>
                    </div>
                ): '' }
                <h5>¿Por qué quiere adoptar?</h5>
                <p>{datas.whyAdopt}</p>
                <h5>¿Conoce las necesidades del animal?</h5>
                <p>{datas.petNeeds}</p>
                <h5>¿Conoce los gastos del animal?</h5>
                <p>{datas.petCosts}</p>
                <h5>¿Conoce la alimentación del animal?</h5>
                <p>{datas.petFood}</p>

                <h3>Vivienda y entorno</h3>
                <h5>¿En qué tipo de vivienda vive?</h5>
                <p>{datas.houseType}</p>
                <h5>¿Estás de alquiler?</h5>
                <p>{datas.renting === true ? 'Sí' : 'No'}</p>
                <h5>¿Se permiten mascotas?</h5>
                <p>{datas.petsAllowed === true ? 'Sí' : 'No'}</p>
                <h5>¿Se mudará pronto?</h5>
                <p>{datas.movingSoon === true ? 'Sí' : 'No'}</p>
                <h5>¿Tiene jardín?</h5>
                <p>{datas.garden === true ? 'Sí' : 'No'}</p>
                <h5>¿Vives con más gente?</h5>
                <p>{datas.morePeople === true ? 'Sí' : 'No'}</p>
                <h5>¿Están todos de acuerdo con la adopción?</h5>
                <p>{datas.welcoming === true ? 'Sí' : 'No'}</p>
                <h5>¿Aceptan una visita?</h5>
                <p>{datas.visit === true ? 'Sí' : 'No'}</p>

                <h3>Estado de esta adopción:</h3>
                <p>{datas.status === 'inProcess' ? 'En proceso' : datas.status === 'accepted' ? 'Aceptado' : datas.status === 'denied' ? 'Denegado' : ''}</p>

                <button type="button" className="updateAdoption" onClick={handleAccept}>Aceptar adopción</button>
                <button type="button" className="updateAdoption" onClick={handleDeny}>Denegar adopción</button>
                
            </div>
        </div>
    )
}

export default ReviewForm;