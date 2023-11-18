import React from 'react';
import './_PetCard.scss';

const PetCard = ({ datos }) => {
    return (
        <div className='petCard-container'>

            <div className='petCard-title'>
                <h2 className='petCard-h2'>Adopción de { datos.name } <img src='https://res.cloudinary.com/dizd9f3ky/image/upload/v1699831804/arrow_2x_cszuw5.png' alt='arrowDown' className='petCard-img'/></h2>
            </div>

            <div className='petCard-info'>
                <img src='https://res.cloudinary.com/dizd9f3ky/image/upload/v1700179683/chico_2x_wbo3pi.png' alt='animal' className='petCard-img'/>
                <p className='petCard-p'>Ciudad: { datos.city }</p>
                <p className='petCard-p'>Sexo: { datos.sex}</p>
            </div>

        </div>
    )
}

export default PetCard
