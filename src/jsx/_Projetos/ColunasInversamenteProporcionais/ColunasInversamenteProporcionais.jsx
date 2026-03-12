import React , {useState, useRef, useEffect} from "react";
import Styles from "./ColunasInversamenteProporcionais.module.css";

function ColunasInversamenteProporcionais(){

    const [colunas, setColunas] = useState([]);
    const [tamanhoTotal, setTamanhoTotal] = useState(1);
    const [novoValor, setNovoValor] = useState(1);

    function atualizarValor(e){
        const valorAtualizado = Number(e.target.value);
        if(valorAtualizado > 0){
            setNovoValor(n => n = valorAtualizado);
            console.log(valorAtualizado)
        }
    }

    function adicionar(){
        setColunas(c => c = [...c, novoValor]);
        setNovoValor(1);
    }

    useEffect(() => {
        colunas.length != 0 && setTamanhoTotal(t => t = colunas.reduce(soma))
    }, [colunas])

    function soma(total, elemento){
        return total + elemento;
    }

    return(
        <div className={Styles.tudo}> 
            <div className={Styles.divColunas}>
                {colunas.map((coluna, id) => { return <div className={Styles.coluna} 
                                                        key={id} 
                                                        style={{ "--altura" : `${(coluna/tamanhoTotal) * 100}%` }}>
                </div> })}

            </div>
            <input type="number" id={Styles.input} min={1} value={novoValor} onChange={(e) => atualizarValor(e)}/>
            <button id={Styles.btn} onClick={() => adicionar()}>+</button>
        </div>
    )

}

export default ColunasInversamenteProporcionais;