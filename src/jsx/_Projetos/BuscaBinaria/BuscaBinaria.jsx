import React, {useState, useEffect, useRef} from "react";
import Styles from "./BuscaBinaria.module.css"


function BuscaBinaria(){
    
    const [numeros, setNumeros] = useState([NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN]);
    const [numeroEscolhido, setNumeroEscolhido] = useState(NaN);
    const [desabilitados, setDesabilitados] = useState([false,false,true]);
    const [visibilidadeAlerta, setVisibilidadeAlerta] = useState("none");
    const [estaAtivo, setEstaAtivo] = useState(true)

    const [e, setE] = useState(-1);
    const [d, setD] = useState(numeros.length);
    const [m, setM] = useState((e+d)/2);
    
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
            proximo()
        }
    }

    function proximo(){
        let novoE = e;
        let novoD = d;

        if(novoD - novoE == 1) return;

        if(numeros[m] == numeroEscolhido) return;

        if(numeros[m] > numeroEscolhido) novoD = m - 1;
        else novoE = m;

        setE(novoE);
        setD(novoD);
        setM(Math.floor((novoE + novoD) / 2));

        console.log("--- COMEÇA AQUI ---")
        console.log(novoE);
        console.log(novoD);
        console.log(Math.floor((novoE + novoD) / 2));
    }

    function resetar(){
        setE(-1);
        setD(9);
        setM(4);
    }

    return(
        <div className={Styles.divBuscaBinaria}>
            <h1 className="titulo">Busca Binaria interativa</h1>

            <div className={Styles.nodes} 
            style={{
                "--ver-e-global": e === -1 ? "block" : "none",
                "--ver-d-global": d === numeros.length ? "block" : "none"
            }}>

                {numeros.map((numero, id) => {
                    return (
                        <div className={Styles.node} key={id} style={{
                            "--ver-e-local": e === id ? "visible" : "hidden",
                            "--ver-d-local": d === id ? "visible" : "hidden"
                        }}>
                            <div className={Styles.setaParaBaixo} style={ m == id && estaAtivo ? {visibility: "visible"} : {visibility: "hidden"}} ></div>
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