import React from 'react';
import { useState, useEffect } from 'react';
import './_OnboardingPage.scss';
import SwiperOnboarding from '../../Components/SwiperOnboarding/SwiperOnboarding';

function OnboardingPage() {

    const [showLogo, setShowLogo] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowLogo(false);
        }, 3000);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <div>
            {showLogo && (
                <div className="logo-container">
                    <img
                        src="https://res.cloudinary.com/dizd9f3ky/image/upload/v1699703888/group29_kd1wx7.png"
                        alt="Logo-img"
                        className='logo-img'
                    />
                    <img
                        src="https://res.cloudinary.com/dizd9f3ky/image/upload/v1699704207/group_2x_bunnmy.png"
                        alt="Logo-text"
                        className='logo-text'
                    />
                </div>
            )}
            {!showLogo && (
            <SwiperOnboarding />
            )}
        </div>
    );
}

export default OnboardingPage;
