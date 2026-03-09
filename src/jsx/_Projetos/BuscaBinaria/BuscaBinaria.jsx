import React, {useState, useEffect, useRef} from "react";
import Styles from "./BuscaBinaria.module.css"


function BuscaBinaria(){
    
    const [numeros, setNumeros] = useState([NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN]);
    const [numeroEscolhido, setNumeroEscolhido] = useState(NaN);
    const [visibilidadeAlerta, setVisibilidadeAlerta] = useState("none");
    const [estaAtivo, setEstaAtivo] = useState(false)

    const [e, setE] = useState(-1);
    const [d, setD] = useState(numeros.length);
    const [m, setM] = useState(Math.floor((e+d)/2));
    
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
        setEstaAtivo(true)
        let novoE = e;
        let novoD = d;

        if(novoD - novoE == 1) return;

        if(numeros[m] == numeroEscolhido) return;

        if(numeros[m] > numeroEscolhido) novoD = m;
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
        setEstaAtivo(false)
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
                            <div className={Styles.setaParaBaixo} 
                                style={ /* Entrei em convulsão com isso mas FDS funcionanakosaks*/
                                    (m == id && d - e != 1) ||
                                    (e == m && d - e == 1 && id - 1 == e) ? {visibility: "visible"} :
                                                                            {visibility: "hidden"}} ></div>
                            <input  type="number"
                                    className={Styles.numero} 
                                    id={`numero${id}`}
                                    placeholder="0"
                                    onChange={(e) => modificação(e)}
                                    value={Number.isNaN(numero) ? "" : numero}
                                    disabled={estaAtivo ? true : false}
                                    style={{backgroundColor: !(id > e && id <= d) && "red" }}
                            />
                        </div>
                    )
                })}
            {d - e === 1 && d === numeros.length && (
                <div className={Styles.setaParaBaixo} style={{position: "absolute", top: "0%", right: "-7%"}}></div>
            )}
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
                    disabled={estaAtivo ? true : false}
            />

            <div className={Styles.botoes}>
                <button id={Styles.resetar} onClick={() => resetar()} >RESETAR</button>
                <button id={Styles.rodar} onClick={() => rodar()}>RODAR</button>
            </div>
            
        </div>
    )

}

export default BuscaBinaria;