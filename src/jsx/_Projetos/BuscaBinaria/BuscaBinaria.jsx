import React, {useState, useEffect, useRef} from "react";
import Styles from "./BuscaBinaria.module.css"


function BuscaBinaria(){
    
    const [numeros, setNumeros] = useState([0,0,0,0,0,0,0,0,0]);
    let index = -1;
    
    function modificação(e){
        const inputDoUsuario = e.target;
        const index = parseInt(inputDoUsuario.id.charAt(6));
        const valor = parseInt(inputDoUsuario.value);
    
        setNumeros(n => {
            const novoArray = [...n];
            novoArray[index] = valor;
            return novoArray;
        });
    }

    return(
        <div className="divBuscaBinaria">
            <h1 className="titulo">Busca Binaria interativa</h1>

            <div className={Styles.nodes}>

                {numeros.map((numero, id) => {
                    return (
                        <div className={Styles.node} key={id}>
                            <div className={Styles.setaParaBaixo}></div>
                            <input type="number" className={Styles.numero} id={`numero${++index}`} placeholder="0" onChange={(e) => modificação(e)}/>
                        </div>
                    )
                })}

            </div>
        </div>
    )

}

export default BuscaBinaria;