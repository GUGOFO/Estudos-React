import React , {useState, useRef, useEffect} from "react";
import Styles from "./ColunasInversamenteProporcionais.module.css";

function ColunasInversamenteProporcionais(){

    const [colunas, setColunas] = useState([]);

    function soma(total, elemento){
        return total + elemento;
    }

    return(
        <div > 
            <div className={Styles.divColunas}>
                {colunas.map((coluna, id) => { return <div className={Styles.coluna} 
                                                        key={id} 
                                                        style={{ "--altura" : `${(coluna/colunas.reduce(soma)) * 100}%` }}>
                </div> })}

            </div>
            <input type="number" />
        </div>
    )

}

export default ColunasInversamenteProporcionais;