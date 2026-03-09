import React, {useState, useEffect, useRef} from "react";
import Styles from "./BuscaBinaria.module.css"


function BuscaBinaria(){
    
    const [numeros, setNumeros] = useState([NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN]);
    const [numeroEscolhido, setNumeroEscolhido] = useState(NaN);
    const [desabilitados, setDesabilitados] = useState([false,false,true]);
    const [visibilidadeAlerta, setVisibilidadeAlerta] = useState("none");
    
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

    function ordemIncorreta(){
        for(let i = 0; i < numeros.length - 2; i++)
            if(numeros[i] >= numeros[i + 1]) return true;
        return false;
    }

    function rodar(){
        let numeroNaoDefinido = 0;
        numeros.forEach(numero => { if(Number.isNaN(numero)) numeroNaoDefinido++})
        
        if(numeroNaoDefinido || ordemIncorreta() || Number.isNaN(numeroEscolhido)){
            setVisibilidadeAlerta("flex")
        }
        else{
            setVisibilidadeAlerta("none")

            
        }
    }

    function resetar(){
        setNumeros([NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN]);
        setNumeroEscolhido(NaN);
    }

    return(
        <div className={Styles.divBuscaBinaria}>
            <h1 className="titulo">Busca Binaria interativa</h1>

            <div className={Styles.nodes}>

                {numeros.map((numero, id) => {
                    return (
                        <div className={Styles.node} key={id}>
                            <div className={Styles.setaParaBaixo} style={id + 1 != 4 ? {visibility: "hidden"} : {visibility: "visible"}} ></div>
                            <input  type="number"
                                    className={Styles.numero} 
                                    id={`numero${id}`}
                                    placeholder="0"
                                    onChange={(e) => modificação(e)}
                                    value={Number.isNaN(numero) ? "" : numero}
                            />
                        </div>
                    )
                })}

            </div>

            <p id={Styles.alerta} style={{display: visibilidadeAlerta}}>
                Ocorreu um erro no seu programa, veja se: <br />
                1 - os numeros existem <br />
                2 - estão em ordem crescente <br />
            </p>
            
            <h2>Coloque o numero que deseja buscar</h2>
            <input  type="number" 
                    className={Styles.numero}
                    name="inputUsuario" 
                    placeholder="0" 
                    onChange={(e) => modificarEscolha(e)} 
                    value={Number.isNaN(numeroEscolhido) ? "" : numeroEscolhido}
            />

            <div className={Styles.botoes}>
                <button id={Styles.resetar} disabled={desabilitados[0]} onClick={() => resetar()} >RESETAR</button>
                <button id={Styles.rodar} disabled={desabilitados[1]} onClick={() => rodar()}>RODAR</button>
                <button id={Styles.proximo} disabled={desabilitados[2]}>PROXIMO</button>
            </div>
            
        </div>
    )

}

export default BuscaBinaria;