import React from "react";
import style from "./bola.module.css";

function bola({numero}){

    return(
        <div className={style.divbola}>
            <h1>{numero}</h1>
        </div>
    )
}

export default bola;