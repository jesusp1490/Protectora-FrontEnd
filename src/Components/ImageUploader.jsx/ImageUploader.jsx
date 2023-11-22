import React from 'react'
import { useState } from 'react'
import './_ImageUploader.scss'

const ImageUploader = ({ onImageChange, index, borderStyle = '1px dashed #ccc' }) => {
    const [image, setImage] = useState(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setImage(reader.result);
                onImageChange(index, reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className='infoA-ImgUp-container'>
            <label htmlFor={`imageInput${index}`}>
                {image ? (
                    <img src={image} alt="Preview" style={{ width: '120px', height: '160px' }} />
                ) : (
                    <div className="infoA-placeholder">
                        <img
                            src='https://res.cloudinary.com/dizd9f3ky/image/upload/v1700436714/group7_2x_gtbukn.png'
                            alt="Camera Icon"
                            className='infoA-ImgUp-img'
                        />
                        <p className='infoA-ImgUp-p'>Subir foto</p>
                    </div>
                )}
            </label>
            <input
                type="file"
                id={`imageInput${index}`}
                style={{ display: 'none' }}
                onChange={(event) => handleImageChange(event)}
            />
        </div>
    );
};

export default ImageUploader;