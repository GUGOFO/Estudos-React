import Styles from "./Styles.module.css"

import React, {useState} from "react";

function BtnAumentar(){
    
    const [valor, useValor] = useState(0);

    const aumentar = () => {
        useValor(valor + 1);
    }

    const diminuir = () => {
        useValor(valor - 1);
    }

    const rezetar = () => {
        useValor(0);
    }

    return(
        <div className={Styles.container}>
            <h1>{valor}</h1>
            <div className={Styles.btnDivs}>
                <button className={Styles.btn} onClick={diminuir}>DIMINUIR</button>
                <button className={Styles.btn} onClick={rezetar}>REZETAR</button>
                <button className={Styles.btn} onClick={aumentar}>AUMENTAR</button>
            </div>
        </div>
    );
}

export default BtnAumentar