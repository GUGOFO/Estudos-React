import React, {useState, useEffect, useRef} from "react";
import Styles from "./BuscaBinaria.module.css"

function BuscaBinaria(){

    const [numeros, setNumeros] = useState([0,0,0,0,0,0,0,0,0]);

    console.log(numeros)

    return(
        <div className="divBuscaBinaria">
            <h1 className="titulo">Busca Binaria interativa</h1>

            <div className={Styles.nodes}>
                
                {numeros.map((numero, id) => {
                    return (
                        <div className={Styles.node} key={id}>
                            <div className={Styles.setaParaBaixo}></div>
                            <input type="number" className={Styles.numero} id={`numero-${id}`}/>
                        </div>
                    )
                })}

            </div>
        </div>
    )

}

export default BuscaBinaria;