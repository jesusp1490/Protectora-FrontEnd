import React, { useState } from 'react';
import './_ImageUploader.scss';

const ImageUploader = ({ onImageChange, borderStyle = '1px dashed #ccc', inputId }) => {
    const [images, setImages] = useState([]);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                const newImage = {
                    id: Date.now(),
                    dataURL: reader.result,
                };
                setImages([...images, newImage]);
                onImageChange([...images, newImage]);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleRemoveImage = (id) => {
        const updatedImages = images.filter((img) => img.id !== id);
        setImages(updatedImages);
        onImageChange(updatedImages);
    };

    return (
        <div className='infoA-ImgUp-container' style={{background: images.length ? 'url(' + images[0].dataURL + ')' : ''}}>
            <label htmlFor={inputId ? inputId : "imageInput"}>
                <div if className="infoA-placeholder">
                    <img
                        src='https://res.cloudinary.com/dizd9f3ky/image/upload/v1700436714/group7_2x_gtbukn.png'
                        alt="Ícono de cámara"
                        className='infoA-ImgUp-img'
                    />
                    <p className='infoA-ImgUp-p'>Subir foto</p>
                </div>
            </label>
            <input
                type="file"
                id={inputId ? inputId : "imageInput"}
                style={{ display: 'none' }}
                onChange={(event) => handleImageChange(event)}
            />
        </div>
    );
};

export default ImageUploader;