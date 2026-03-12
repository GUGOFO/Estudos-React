import React , {useState, useRef, useEffect} from "react";
import Styles from "./ColunasInversamenteProporcionais.module.css";

function ColunasInversamenteProporcionais(){

    const [colunas, setColunas] = useState([]);
    const [novoValor, setNovoValor] = useState(1);

    function atualizarValor(e){
        const valorAtualizado = e.target.value;
        if(valorAtualizado > 0){
            setNovoValor(n => n = valorAtualizado);
            console.log(valorAtualizado)
        }
    }

    function soma(total, elemento){
        return total + elemento;
    }

    return(
        <div className={Styles.tudo}> 
            <div className={Styles.divColunas}>
                {colunas.map((coluna, id) => { return <div className={Styles.coluna} 
                                                        key={id} 
                                                        style={{ "--altura" : `${(coluna/colunas.reduce(soma)) * 100}%` }}>
                </div> })}

            </div>
            <input type="number" id={Styles.input} min={1} value={novoValor} onChange={(e) => atualizarValor(e)}/>
            <button id={Styles.btn}>+</button>
        </div>
    )

}

export default ColunasInversamenteProporcionais;