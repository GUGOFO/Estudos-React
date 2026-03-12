import React , {useState, useRef, useEffect} from "react";
import Styles from "./ColunasInversamenteProporcionais.module.css";

function ColunasInversamenteProporcionais(){

    const [colunas, setColunas] = useState([]);
    const [novoValor, setNovoValor] = useState(Math.floor(Math.random() * 100 + 1));

    function atualizarValor(e){
        const valorAtualizado = Number(e.target.value);
        if(valorAtualizado > 0){
            setNovoValor(n => n = valorAtualizado);
            console.log(valorAtualizado)
        }
    }

    function adicionar(){
        setColunas(c => c = [...c, novoValor]);
        setNovoValor(Math.floor(Math.random() * 100 + 1));
    }

    function aleatorizar(){
        const novoNumColunas = Math.floor(Math.random() * 100 + 1);
        let novasColunas = [];

        for(let i = 0; i < novoNumColunas; i++) novasColunas = [...novasColunas, Math.floor(Math.random() * 100 + 1)]
        console.log(novasColunas)
        setColunas(novasColunas)
    }

    return(
        <div className={Styles.tudo}> 
            <div className={Styles.divColunas}>
                {colunas.map((coluna, id) => { return <div className={Styles.coluna} 
                                                        key={id} 
                                                        style={{ "--altura" : `${(coluna/Math.max(...colunas)) * 100}%` }}>
                </div> })}

            </div>
            <input type="number" id={Styles.input} min={1} value={novoValor} onChange={(e) => atualizarValor(e)}/>
            <button className={Styles.btn} onClick={() => adicionar()}>+</button>
            <button className={Styles.btn} onClick={() => aleatorizar()}>ALEATORIZAR</button>
        </div>
    )

}

export default ColunasInversamenteProporcionais;