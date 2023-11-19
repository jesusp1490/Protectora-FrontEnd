import React from 'react';
import './_PetCard.scss'
import { Link } from 'react-router-dom';

const PetCard = ({ form, petData }) => {
    return (
        <Link to={`/adoption-status/${form.id}`}>
            <li key={form.id} className="petCard-card">
                <div className='petCard-header'>
                    <h3 className='petCard-h3'>Adopción de {form.petName}</h3>
                    <div className='petCard-status'>
                        <p className='petCard-statusp'>{form.status} </p>
                        <img src='https://res.cloudinary.com/dizd9f3ky/image/upload/v1700402941/oval_2x_v2wbdo.png' alt='Status-Color' className='petCard-statusColor' />
                    </div>
                </div>

                <div className='petCard-info'>
                    <img src={petData?.image} alt="Pet" className="petCard-img" />
                    <div className='petCard-text'>
                        <p className='petCard-p'><span className='petCard-span'>Nombre:</span> {form.petName}</p>
                        <p className='petCard-p'><span className='petCard-span'>Ciudad:</span> {form.city}</p>
                    </div>
                </div>
            </li>
        </Link>
    );
};

export default PetCard;
