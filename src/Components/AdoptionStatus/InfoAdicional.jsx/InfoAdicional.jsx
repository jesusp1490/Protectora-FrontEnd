import React from 'react'
import { useState } from 'react'


const InfoAdicional = ({ pet }) => {

    const [images, setImages] = useState([null, null, null]);
    const [paymentOption, setPaymentOption] = useState('pagoUnico');

    const handleImageChange = (index, images) => {
        const newImages = [...images];
        newImages[index] = images;
        setImages(newImages);
    };

    const handlePaymentOptionChange = (option) => {
        setPaymentOption(option);
    };

    const handleSubmit = () => {
        console.log('Información adicional enviada:', { images, paymentOption });
    };

    return (
        <div>
            <h2>Subir imágenes</h2>
            <p>Necesitamos que nos subas algunas fotos de dónde va vivir tu nueva mascota para poder echarte una mano si necesitas algo más de información</p>
        
            <div>
                {images.map ((image, index) => (
                    <div>
                        <input
                            type='file'
                            accept='image/*'
                            onChange={(e) => handleImageChange(index, e.target.files[0])}
                        />
                        {image ? (
                            <img src='' alt='' />
                        ) : (
                            <img src='' alt='Default-img' />
                        )}
                    </div>
                ))}
            </div>
        
            <div>
                <h2>¿Cómo quieres pagar las tasas?</h2>
                <p>Para pagar las tasas de adopcion puedes elegir:</p>
                <label>
                    Pago único
                    <input
                        type='radio'
                        value='pagoUnico'
                        checked={paymentOption === 'pagoUnico'}
                        onChange={() => handlePaymentOptionChange('pagoUnico')}
                    />
                </label>
                <label>
                    Fraccionar el pago
                    <input
                        type='radio'
                        value='fraccionarPago'
                        checked={paymentOption === 'fraccionarPago'}
                        onChange={() => handlePaymentOptionChange('fraccionarPago')}
                    />
                </label>

                <div>
                    <h2>Precio: {pet.adoptionFee}</h2>
                </div>

                <div>
                    <label>
                        <input type='checkbox' />
                        Opción 1
                        <img src='' alt='' />
                    </label>

                    <label>
                        <input type='checkbox' />
                        Opción 2
                        <img src='' alt='' />
                    </label>

                    <label>
                        <input type='checkbox' />
                        Opción 3
                        <img src='' alt='' />
                    </label>
                </div>

                <button onClick={handleSubmit}>Enviar</button>
            </div>
        </div>
    )
}

export default InfoAdicional
