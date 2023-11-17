import React from 'react'
import './_Button.scss'

const Button = ({ texto, type, className }) => {
    return (
        <div>
            <button className={className} type={type}>{texto}</button>
        </div>
    )
}

export default Button
