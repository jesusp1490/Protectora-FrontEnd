import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import './_ReviewForm.scss';
import Button from "../../../Components/Button/Button";
import Navbar from "../../../Components/NavbarProtectora/NavbarProtectora";

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

  return (
    <div className="form-review-container">
      <h2 className="review-h2">Formulario de <span className="review-span">{datas.fullName}</span> para adoptar a <span className="review-span">{datas.petName}</span></h2>
      <div>
        <div className="review-contacto">
          <h3 className="review-h3">Datos de contacto:</h3>
          <h5 className="review-h5">Dirección:</h5>
          <p className="review-p">{datas.address}, {datas.postalCode}, {datas.city}</p>
          <h5 className="review-h5">Teléfono:</h5>
          <p className="review-p">{datas.phoneNumber}</p>
          <h5 className="review-h5">Email:</h5>
          <p className="review-p">{datas.email}</p>
          <h5 className="review-h5">DNI:</h5>
          <p className="review-p">{datas.dni}</p>
        </div>

        <div className="review-mascotas">
          <h3 className="review-h3">Mascotas:</h3>
          <h5 className="review-h5">¿Tiene otras mascotas?</h5>
          <p className="review-p">{datas.otherPets === true ? 'Sí' : 'No'}</p>
          <p className="review-p">{datas.whatPets ? `${datas.whatPets}` : ''}</p>
          {datas.social ? (
            <div>
              <h5 className="review-h5">¿Se llevan bien con otros animales?</h5>
              <p className="review-p">{datas.social}</p>
            </div>
          ) : ''}
          <h5 className="review-h5">¿Por qué quiere adoptar?</h5>
          <p className="review-p">{datas.whyAdopt}</p>
          <h5 className="review-h5">¿Conoce las necesidades del animal?</h5>
          <p className="review-p">{datas.petNeeds}</p>
          <h5 className="review-h5">¿Conoce los gastos del animal?</h5>
          <p className="review-p">{datas.petCosts}</p>
          <h5 className="review-h5">¿Conoce la alimentación del animal?</h5>
          <p className="review-p">{datas.petFood}</p>
        </div>

        <div className="review-entorno">
          <h3 className="review-h3">Vivienda y entorno</h3>
          <h5 className="review-h5">¿En qué tipo de vivienda vive?</h5>
          <p className="review-p">{datas.houseType}</p>
          <h5 className="review-h5">¿Estás de alquiler?</h5>
          <p className="review-p">{datas.renting === true ? 'Sí' : 'No'}</p>
          <h5 className="review-h5">¿Se permiten mascotas?</h5>
          <p className="review-p">{datas.petsAllowed === true ? 'Sí' : 'No'}</p>
          <h5 className="review-h5">¿Se mudará pronto?</h5>
          <p className="review-p">{datas.movingSoon === true ? 'Sí' : 'No'}</p>
          <h5 className="review-h5">¿Tiene jardín?</h5>
          <p className="review-p">{datas.garden === true ? 'Sí' : 'No'}</p>
          <h5 className="review-h5">¿Vives con más gente?</h5>
          <p className="review-p">{datas.morePeople === true ? 'Sí' : 'No'}</p>
          <h5 className="review-h5">¿Están todos de acuerdo con la adopción?</h5>
          <p className="review-p">{datas.welcoming === true ? 'Sí' : 'No'}</p>
          <h5 className="review-h5">¿Aceptan una visita?</h5>
          <p className="review-p">{datas.visit === true ? 'Sí' : 'No'}</p>
        </div>


        <h3 className="review-h3">Estado de esta adopción:</h3>
        <p className="review-status-p" data-status={datas.status}>{datas.status === 'inProcess' ? 'En proceso' : datas.status === 'accepted' ? 'Aceptado' : datas.status === 'denied' ? 'Denegado' : ''}</p>


        <div className="review-btn">
              <Button className='btn-empty-pink' texto='Denegar adopción' type="button" onClick={handleDeny} />
              <Button className='btn-pink' texto='Aceptar adopción' type="button" onClick={handleAccept} />
        </div>



        <Navbar />

      </div>
    </div>
  )
}

export default ReviewForm;