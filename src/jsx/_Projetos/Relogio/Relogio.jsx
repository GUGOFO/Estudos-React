import React, {useState, useEffect} from "react";
import Styles from "./Relogio.module.css"

function Relogio(){

    const [horario, setHorario] = useState(new Date());

    useEffect(() => {
        const intervalo = setInterval(() => {
            setHorario(new Date());
        }, 1000);

        return() => {
            clearInterval(intervalo);
        }
    },[])

    function formatar(){
        const horas = horario.getHours();
        const minutos = horario.getMinutes();
        const segundos = horario.getSeconds();

        return `${zeros(horas)}:${zeros(minutos)}:${zeros(segundos)}`;
    }

    function zeros(numero){
        return (numero < 10 && "0") + numero;
    }

    return(
        <div className={Styles.containerRelogio}>
            <div className={Styles.relogio}>
                <span>{formatar()}</span>
            </div>
        </div>
    )
}

export default Relogio