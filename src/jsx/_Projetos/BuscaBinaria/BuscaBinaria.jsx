import React, {useState, useEffect, useRef} from "react";
import Styles from "./BuscaBinaria.module.css"


function BuscaBinaria(){
    
    const [numeros, setNumeros] = useState([NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN]);
    const [numeroEscolhido, setNumeroEscolhido] = useState(NaN);
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

    function modificarEscolha(e){
        const valor = parseInt(e.target.value);
        setNumeroEscolhido(n => n = valor);
    }

    function rodar(){
        let numeroNaoDefinido = 0;
        numeros.forEach(numero => { if(Number.isNaN(numero)) numeroNaoDefinido++})
        
        if(numeroNaoDefinido || ordemIncorreta() || Number.isNaN(numeroEscolhido)){
            console.log(ordemIncorreta())
            console.log(numeroNaoDefinido);
            console.log(numeroEscolhido);
            console.log(numeros)
        }
    }

    function ordemIncorreta(){
        for(let i = 0; i < numeros.length - 2; i++)
            if(numeros[i] >= numeros[i + 1]) return true;
        return false;
    }

    return(
        <div className={Styles.divBuscaBinaria}>
            <h1 className="titulo">Busca Binaria interativa</h1>

            <div className={Styles.nodes}>

                {numeros.map((numero, id) => {
                    return (
                        <div className={Styles.node} key={id}>
                            <div className={Styles.setaParaBaixo} style={index + 1 != 4 ? {visibility: "hidden"} : {display: "visible"}} ></div>
                            <input type="number" className={Styles.numero} id={`numero${++index}`} placeholder="0" onChange={(e) => modificação(e)}/>
                        </div>
                    )
                })}

            </div>
            
            <h2>Coloque o numero que deseja buscar</h2>
            <input type="number" className={Styles.numero} name="inputUsuario" placeholder="0" onChange={(e) => modificarEscolha(e)}/>

            <div className={Styles.botoes}>
                <button id={Styles.resetar} >RESETAR</button>
                <button id={Styles.rodar} onClick={() => rodar()}>RODAR</button>
                <button id={Styles.proximo} disabled={true}>PROXIMO</button>
            </div>
            
        </div>
    )

}

export default BuscaBinaria;