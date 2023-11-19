import React from "react"
import './__AdoptionCards.scss'


const AdoptionCards = ({ pet }) => {
    return (
        <div className="">
          <div className="">
            <img src={ pet.image } alt={pet.name} className="card-img"/>
            <p className="">{pet.name}</p>
            <p className="">{pet.city}</p>
            <p className="">{pet.age}</p>
          </div>
       
        </div>
    )
}
export default AdoptionCards