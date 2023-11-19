import React, { useEffect, useState } from "react";
import "./_filtros.scss";
import { Link } from "react-router-dom";
import Button  from "../Button/Button";

const Filtros = () => {
  const perro = "https://res.cloudinary.com/ddjbaf93k/image/upload/v1700169520/protectora/a7m6muiw2lupbpcgnz9z.png";
  const gato = "https://res.cloudinary.com/ddjbaf93k/image/upload/v1700170805/protectora/dpnfk0h2hjyhou82u2aq.png" ;
  const conejo = "https://res.cloudinary.com/ddjbaf93k/image/upload/v1700171128/protectora/xusu4ruicyew3qmvr6js.png";
  const pequeñoMamifero = "https://res.cloudinary.com/ddjbaf93k/image/upload/v1700171997/protectora/kf2slk48arsfitreywoa.png";
  const pez = "https://res.cloudinary.com/ddjbaf93k/image/upload/v1700172149/protectora/v8fomaq8gzbvdsqtpbql.png";
  const reptil = "https://res.cloudinary.com/ddjbaf93k/image/upload/v1700172294/protectora/eafi2ynxp3vcsx2alu0s.png";
  const anfibio = "https://res.cloudinary.com/ddjbaf93k/image/upload/v1700175054/protectora/jdxiojkv0pgqefkkbzgu.png";
  const insectos = "https://res.cloudinary.com/ddjbaf93k/image/upload/v1700175296/protectora/otm3izo46hwrgo3i9phz.png";
  const ave = "https://res.cloudinary.com/ddjbaf93k/image/upload/v1700175621/protectora/yxhphriturtum3qxsyeg.png";
  const femenino = "https://res.cloudinary.com/ddjbaf93k/image/upload/v1700176921/protectora/a6fuzmavjtnakbkkkq8z.png";
  const masculino = "https://res.cloudinary.com/ddjbaf93k/image/upload/v1700177217/protectora/csxfr7fqy2gij4gbvugz.png";
  const perroP = "https://res.cloudinary.com/ddjbaf93k/image/upload/v1700228515/protectora/gjdvvmpoexzvzla2bgm0.png";
  const perroM = "https://res.cloudinary.com/ddjbaf93k/image/upload/v1700228616/protectora/ymgpd8cnhzubfnvvwsre.png";
  const perroG = "https://res.cloudinary.com/ddjbaf93k/image/upload/v1700228663/protectora/zunjijht9tgpgmp3qvm6.png";

  const perroRosa = 'https://res.cloudinary.com/ddjbaf93k/image/upload/v1700348292/protectora/perrop_i71qjh.png'
  const gatoRosa = "https://res.cloudinary.com/ddjbaf93k/image/upload/v1700406200/protectora/bexzpgfpqayeafvosint.png";
  const conejoRosa = "https://res.cloudinary.com/dizd9f3ky/image/upload/v1700406880/group122x_craegs.png";
  const mamiferoRosa = "https://res.cloudinary.com/ddjbaf93k/image/upload/v1700406904/protectora/luu8pcviqguiewtt10ua.png";
  const pezRosa = " https://res.cloudinary.com/dizd9f3ky/image/upload/v1700403753/057Fish22x_bw8pmb.png";
  const reptilRosa = "https://res.cloudinary.com/dizd9f3ky/image/upload/v1700403753/group82x_sptcol.png";
  const anfibioRosa = "https://res.cloudinary.com/dizd9f3ky/image/upload/v1700403752/anfibio2x_owl42k.png";
  const insectoRosa = "https://res.cloudinary.com/dizd9f3ky/image/upload/v1700403753/group52x_auhayt.png";
  const aveRosa = "https://res.cloudinary.com/ddjbaf93k/image/upload/v1700407423/protectora/lh8prt6u5ur7oqrcxipy.png";
  const femeninoRosa  = "https://res.cloudinary.com/ddjbaf93k/image/upload/v1700407973/protectora/xgdlnywssh99vxrzaqd9.png";
  const masculinoRosa = "https://res.cloudinary.com/ddjbaf93k/image/upload/v1700408028/protectora/ponreaata6ungopitryb.png";
  const perroPR  = "https://res.cloudinary.com/ddjbaf93k/image/upload/v1700407816/protectora/qxbfxzawq1liunuffedi.png";
  const perroMR  = "https://res.cloudinary.com/ddjbaf93k/image/upload/v1700408126/protectora/dvmgrlt4sczrholnnlnj.png";
  const perroGR  = "https://res.cloudinary.com/ddjbaf93k/image/upload/v1700408136/protectora/ssmpmyrqshsxxxt0axy2.png";


const [dogActive, setDogActive] = useState(false)
const [catActive, setCatActive] = useState(false)
const [rabbitActive, setRabbitActive] = useState(false)
const [insectActive, setInsectActive] = useState(false)
const [frogActive, setFrogActive] = useState(false)
const [reptileActive, setReptileActive] = useState(false)
const [fishActive, setFishActive] = useState(false)
const [smallMammalActive, setSmallMammalActive] = useState(false)
const [birdActive, setBirdActive] = useState(false)
const [maleActive, setMaleActive] = useState(false)
const [femaleActive, setFemaleActive] = useState(false)
const [smallActive, setSmallActive] = useState(false)
const [mediumActive, setMediumActive] = useState(false)
const [bigActive, setBigActive] = useState(false)
const [anyActive, setAnyActive] = useState(false)

  const handleDogChange = () => {
    
    if (dogActive === true){
      setDogActive(false);
    } else {
      setDogActive(true);
    }
  }

  const handleCatChange = () => {
    
    if (catActive === true){
      setCatActive(false);
    } else {
      setCatActive(true);
    }
  }

  const handleRabbitChange = () => {
    
    if (rabbitActive === true){
      setRabbitActive(false);
    } else {
      setRabbitActive(true);
    }
  }

  const handleSMChange = () => {
    
    if (smallMammalActive === true){
      setSmallMammalActive(false);
    } else {
      setSmallMammalActive(true);
    }
  }

  const handleBirdChange = () => {
    
    if (birdActive === true){
      setBirdActive(false);
    } else {
      setBirdActive(true);
    }
  }

  const handleReptileChange = () => {
    
    if (reptileActive === true){
      setReptileActive(false);
    } else {
      setReptileActive(true);
    }
  }

  const handleFishChange = () => {
    
    if (fishActive === true){
      setFishActive(false);
    } else {
      setFishActive(true);
    }
  }

  const handleInsectChange = () => {
    
    if (insectActive === true){
      setInsectActive(false);
    } else {
      setInsectActive(true);
    }
  }

  const handleFrogChange = () => {
    
    if (frogActive === true){
      setFrogActive(false);
    } else {
      setFrogActive(true);
    }
  }

  const handleMaleChange = () => {
    
    if (maleActive === true){
      setMaleActive(false);
    } else {
      setMaleActive(true);
    }
  }

  const handleFemaleChange = () => {
    
    if (femaleActive === true){
      setFemaleActive(false);
    } else {
      setFemaleActive(true);
    }
  }

  const handleSmallChange = () => {
    
    if (smallActive === true){
      setSmallActive(false);
    } else {
      setSmallActive(true);
    }
  }

  const handleMediumChange = () => {
    
    if (mediumActive === true){
      setMediumActive(false);
    } else {
      setMediumActive(true);
    }
  }

  const handleBigChange = () => {
    
    if (bigActive === true){
      setBigActive(false);
    } else {
      setBigActive(true);
    }
  }

  useEffect(() =>{
    const handleAny = () => {
  if(dogActive === true || catActive === true || rabbitActive === true || reptileActive === true || frogActive === true || birdActive === true || fishActive === true || smallMammalActive === true || insectActive === true || maleActive === true || femaleActive === true || smallActive === true || mediumActive === true || bigActive === true) {
    setAnyActive(true)
  } else {
    setAnyActive(false)
  }
}
handleAny()
},[bigActive, birdActive, catActive, dogActive, femaleActive, fishActive, frogActive, insectActive, maleActive, mediumActive, rabbitActive, reptileActive, smallActive, smallMammalActive])

  return (
    <div className="filtro">
      <div className="filtro-main">
        <p className="main"> Filtros </p>      
      <Link to="/animales-adoption" className="linkTo">
        <button className="slide-button">
          <img className="imgX"
            src="https://res.cloudinary.com/dizd9f3ky/image/upload/v1700061552/cerrar_2x_oyaz2p.png"
            alt="X"  />
        </button>
      </Link>
      </div>  
      <div>
        <p className="city"> Ciudad </p>
        <div className="containerPlace">
          <select className="selectOption">
            <option>Madrid</option>
            <option>Valencia</option>
            <option>Barcelona</option>
            <option>Sevilla</option>
            <option>Bilbao</option>
            <option>Coruña</option>
          </select>
        </div>
      </div>
      <div>
        <p className="especie"> Especie </p>
        <div className="caja">
          <button className="marco" onClick={handleDogChange}>
            <img src={dogActive === true ? perroRosa : perro} alt="perro" className="img" />
            <p className="size">perro</p>
          </button>
          <button className="marco" onClick={handleCatChange}>
            <img src={catActive === true ? gatoRosa : gato} alt="gato" className="img" />
            <p className="size">gato</p>
          </button>
          <button className="marco" onClick={handleRabbitChange}>
            <img src={rabbitActive === true ? conejoRosa : conejo} alt="conejo" className="img" />
            <p className="size">conejo</p>
          </button>
          <button className="marco" onClick={handleSMChange}>
            <img src={smallMammalActive === true ? mamiferoRosa : pequeñoMamifero} alt="pequeño Mamifero" className="img" />
            <p className="mamif">Pequeño Mamifero</p>
          </button>
          <button className="marco" onClick={handleFishChange}>
            <img src={fishActive === true ? pezRosa : pez} alt="pez" className="img" />
            <p className="size">pez</p>
          </button>
          <button className="marco" onClick={handleReptileChange}>
            <img src={reptileActive === true ? reptilRosa : reptil} alt="reptil" className="img"/>
            <p className="size">reptil</p>
          </button>
          <button className="marco" onClick={handleFrogChange}>
            <img src={frogActive === true ? anfibioRosa : anfibio} alt="anfibio" className="img" />
            <p className="size" >anfibio</p>
          </button>
          <button className="marco" onClick={handleInsectChange}>
            <img src={insectActive === true ? insectoRosa : insectos} alt="insectos" className="img" />
            <p className="size">insectos</p>
          </button>
          <button className="marco" onClick={handleBirdChange}>
            <img src={birdActive === true ? aveRosa : ave} alt="ave" className="img"/>
            <p className="size" >ave</p>
          </button>
        </div>
      </div>
      <div>
        <p className="edad"> Edad </p>
        <div className="containerPlace">
          <select className="selectOption">
            <option>Bebe</option>
            <option>Joven</option>
            <option>Adulto</option>
          </select>
        </div>
        
      </div>
      <div className="btn">
        <p className="sexo"> Sexo </p>
        <div className="btn-marcos">
        <div>
          <button className="marcos" onClick={handleFemaleChange}><img src={femaleActive === true ? femeninoRosa : femenino} alt="femenino" className="img2" />
          <p className="letras">Hembra</p></button>
        </div>
        <div className="macho">
          <button className="marcos" onClick={handleMaleChange}><img src={maleActive === true ? masculinoRosa : masculino} alt="masculino" className="img3" />
          <p className="letras">Macho</p></button>
        </div>
        </div>
      </div>
      <div className="btn">
        <p className="tamaño"> Tamaño </p>
        <div className="btn-marcos">
        <div className="fotoyp">
          <button className="marcos" onClick={handleSmallChange}><img src={smallActive === true ? perroPR : perroP} alt="perro pequeño" className="fotop" />
          <p className="pequeño">pequeño</p></button>
          </div>
        <div className="fotoyp">
          <button className="marcos" onClick={handleMediumChange}><img src={mediumActive === true ? perroMR : perroM} alt="perro mediano" className="foto2" />
          <p className="mediano">Mediano</p></button>
        </div>
        <div className="fotoyp">
          <button className="marcos" onClick={handleBigChange}><img src={bigActive === true ? perroGR : perroG} alt="perro grande" className="foto3" />
          <p className="grande"> Grande </p></button>
        </div>
        </div>
      </div>
      <div className="botones-pink">
      {anyActive === true ? (<div>
        <button type="button" className="no-filters">Borrar filtros</button>
        <button type="button" className="yes-filters">Aplicar</button>
        </div>
      ) : (
        <Button className='btn-pink'texto='Aplicar' type="button" />
      )}
          
      </div>
    </div>
  );
};

export default Filtros;
