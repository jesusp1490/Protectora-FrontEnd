import React from 'react'
import './_Button.scss'

const Button = ({ texto, type = 'button', className, onClick }) => {

    return (
        <div>
            <button className={className} type={type} onClick={onClick}>{texto}</button>
        </div>
    )
}

export default Button
