import React, {useState, useRef, useEffect} from "react";
import Styles from "./RelogioDeParada.module.css"

function RelogioDeParada(){

    const [estaRodando, setEstaRodando] = useState(false);
    const [tempoPassado, setTempoPassado] = useState(0);
    const intervaloIdRef = useRef(null);
    const começarTimerRef = useRef(0);

    useEffect(() => {

        if(estaRodando){
            intervaloIdRef.current = setInterval(() => {
                setTempoPassado(Date.now() - começarTimerRef.current)
            }, 10)
        }

        return(() => {
            clearInterval(intervaloIdRef.current);
        })

    }, [estaRodando]);

    function começar(){
        setEstaRodando(true);
        começarTimerRef.current = Date.now() - tempoPassado;
    }

    function parar(){
        setEstaRodando(false);
    }
    
    function reiniciar(){
        setTempoPassado(0);
        setEstaRodando(false);
    }

    function formatarHorario(){

        let horas = Math.floor(tempoPassado / (1000 * 60 * 60))
        let minutos = Math.floor(tempoPassado / (1000 * 60) % 60);
        let segundos = Math.floor(tempoPassado / (1000) % 60);
        let milisegundos = Math.floor((tempoPassado % 1000) / 10);

        horas = String(horas).padStart(2,"0");
        minutos = String(minutos).padStart(2,"0");
        segundos = String(segundos).padStart(2,"0");
        milisegundos = String(milisegundos).padStart(2,"0");

        return(`${minutos}:${segundos}:${milisegundos}`);
    }
    return(
        <div className={Styles.relogio}>
            <div className={Styles.display}>{formatarHorario()}</div>
            <div className={Styles.controles}>
                <button className={Styles.começarBtn} onClick={() => começar()}>Começar</button>
                <button className={Styles.pararBtn} onClick={() => parar()}>Parar</button>
                <button className={Styles.reiniciarBtn} onClick={() => reiniciar()}>Reiniciar</button>
            </div>
        </div>
    )
}

export default RelogioDeParada