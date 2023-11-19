import React, { useState } from "react";
import "./_filtros.scss";
import { Link } from "react-router-dom";
import Button  from "../Button/Button";

const Filtros = () => {
  const [perro] = useState("https://res.cloudinary.com/ddjbaf93k/image/upload/v1700169520/protectora/a7m6muiw2lupbpcgnz9z.png");
  const [gato] = useState("https://res.cloudinary.com/ddjbaf93k/image/upload/v1700170805/protectora/dpnfk0h2hjyhou82u2aq.png" );
  const [conejo] = useState("https://res.cloudinary.com/ddjbaf93k/image/upload/v1700171128/protectora/xusu4ruicyew3qmvr6js.png");
  const [cobaya] = useState("https://res.cloudinary.com/ddjbaf93k/image/upload/v1700171754/protectora/uqvhjl7j5s18mrkkdmrs.png");
  const [pequeñoMamifero] = useState("https://res.cloudinary.com/ddjbaf93k/image/upload/v1700171997/protectora/kf2slk48arsfitreywoa.png");
  const [pez] = useState("https://res.cloudinary.com/ddjbaf93k/image/upload/v1700172149/protectora/v8fomaq8gzbvdsqtpbql.png");
  const [reptil] = useState("https://res.cloudinary.com/ddjbaf93k/image/upload/v1700172294/protectora/eafi2ynxp3vcsx2alu0s.png");
  const [anfibio] = useState("https://res.cloudinary.com/ddjbaf93k/image/upload/v1700175054/protectora/jdxiojkv0pgqefkkbzgu.png");
  const [insectos] = useState("https://res.cloudinary.com/ddjbaf93k/image/upload/v1700175296/protectora/otm3izo46hwrgo3i9phz.png");
  const [ave] = useState("https://res.cloudinary.com/ddjbaf93k/image/upload/v1700175621/protectora/yxhphriturtum3qxsyeg.png");

  const [femenino] = useState("https://res.cloudinary.com/ddjbaf93k/image/upload/v1700176921/protectora/a6fuzmavjtnakbkkkq8z.png");
  const [masculino] = useState("https://res.cloudinary.com/ddjbaf93k/image/upload/v1700177217/protectora/csxfr7fqy2gij4gbvugz.png");

  const [perroP] = useState("https://res.cloudinary.com/ddjbaf93k/image/upload/v1700228515/protectora/gjdvvmpoexzvzla2bgm0.png");
  const [perroM] = useState("https://res.cloudinary.com/ddjbaf93k/image/upload/v1700228616/protectora/ymgpd8cnhzubfnvvwsre.png");
  const [perroG] = useState("https://res.cloudinary.com/ddjbaf93k/image/upload/v1700228663/protectora/zunjijht9tgpgmp3qvm6.png");

  
  /*const [perroRosa] = useState("https://res.cloudinary.com/ddjbaf93k/image/upload/v1700348292/protectora/perrop_i71qjh.png");
  const [gatoRosa] = useState("https://res.cloudinary.com/ddjbaf93k/image/upload/v1700406200/protectora/bexzpgfpqayeafvosint.png");
  const [conejoRosa] = useState("https://res.cloudinary.com/dizd9f3ky/image/upload/v1700406880/group122x_craegs.png");
  const [mamiferoRosa] = useState("https://res.cloudinary.com/ddjbaf93k/image/upload/v1700406904/protectora/luu8pcviqguiewtt10ua.png");
  const [pezRosa] = useState(" https://res.cloudinary.com/dizd9f3ky/image/upload/v1700403753/057Fish22x_bw8pmb.png");
  const [reptilRosa] = useState("https://res.cloudinary.com/dizd9f3ky/image/upload/v1700403753/group82x_sptcol.png");
  const [anfibioRosa] = useState("https://res.cloudinary.com/dizd9f3ky/image/upload/v1700403752/anfibio2x_owl42k.png");
  const [insectoRosa] = useState("https://res.cloudinary.com/dizd9f3ky/image/upload/v1700403753/group52x_auhayt.png");
  const [aveRosa] = useState("https://res.cloudinary.com/ddjbaf93k/image/upload/v1700407423/protectora/lh8prt6u5ur7oqrcxipy.png");

  const[femeninoRosa ] = useState("https://res.cloudinary.com/ddjbaf93k/image/upload/v1700407973/protectora/xgdlnywssh99vxrzaqd9.png");
  const[ masculinoRosa] = useState("https://res.cloudinary.com/ddjbaf93k/image/upload/v1700408028/protectora/ponreaata6ungopitryb.png");

  const[ perroPR ] = useState("https://res.cloudinary.com/ddjbaf93k/image/upload/v1700407816/protectora/qxbfxzawq1liunuffedi.png");
  const[ perroMR ] = useState("https://res.cloudinary.com/ddjbaf93k/image/upload/v1700408126/protectora/dvmgrlt4sczrholnnlnj.png");
  const[ perroGR ] = useState("https://res.cloudinary.com/ddjbaf93k/image/upload/v1700408136/protectora/ssmpmyrqshsxxxt0axy2.png");
*/



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
          <button className="marco">
            <img src={perro} alt="perro" className="img" />
            <p className="size">perro</p>
          </button>
          <button className="marco">
            <img src={gato} alt="gato" className="img" />
            <p className="size">gato</p>
          </button>
          <button className="marco">
            <img src={conejo} alt="conejo" className="img" />
            <p className="size">conejo</p>
          </button>
          <button className="marco">
            <img src={cobaya} alt="cobaya" className="img" />
            <p className="size">cobaya</p>
          </button>
          <button className="marco">
            <img src={pequeñoMamifero} alt="pequeño Mamifero" className="img" />
            <p className="mamif">Pequeño Mamifero</p>
          </button>
          <button className="marco">
            <img src={pez} alt="pez" className="img" />
            <p className="size">pez</p>
          </button>
          <button className="marco">
            <img src={reptil} alt="reptil" className="img"/>
            <p className="size">reptil</p>
          </button>
          <button className="marco">
            <img src={anfibio} alt="anfibio" className="img" />
            <p className="size" >anfibio</p>
          </button>
          <button className="marco">
            <img src={insectos} alt="insectos" className="img" />
            <p className="size">insectos</p>
          </button>
          <button className="marco">
            <img src={ave} alt="ave" className="img"/>
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
          <button className="marcos"><img src={femenino} alt="femenino" className="img2" />
          <p className="letras">Hembra</p></button>
        </div>
        <div className="macho">
          <button className="marcos"><img src={masculino} alt="masculino" className="img3" />
          <p className="letras">Macho</p></button>
        </div>
        </div>
      </div>
      <div className="btn">
        <p className="tamaño"> Tamaño </p>
        <div className="btn-marcos">
        <div className="fotoyp">
          <button className="marcos"><img src={perroP} alt="perro pequeño" className="fotop" />
          <p className="pequeño">pequeño</p></button>
          </div>
        <div className="fotoyp">
          <button className="marcos"><img src={perroM} alt="perro mediano" className="foto2" />
          <p className="mediano">Mediano</p></button>
        </div>
        <div className="fotoyp">
          <button className="marcos"><img src={perroG} alt="perro grande" className="foto3" />
          <p className="grande"> Grande </p></button>
        </div>
        </div>
      </div>
      <div className="botones-pink">
          <Button className='btn-pink'texto='Aplicar' type="button" />
      </div>
    </div>
  );
};

export default Filtros;
