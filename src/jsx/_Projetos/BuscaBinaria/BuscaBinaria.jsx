import React, {useState, useEffect, useRef} from "react";
import Styles from "./BuscaBinaria.module.css"

function BuscaBinaria(){

    return(
        <div className="divBuscaBinaria">
            <h1 className="titulo">Busca Binaria interativa</h1>

            <div className={Styles.nodes}>

                <div className={Styles.node} id="node1">
                    <div className={Styles.setaParaBaixo}></div>
                    <input type="number" id={Styles.numero} />
                </div>

                <div className={Styles.node} id="node1">
                    <div className={Styles.setaParaBaixo}></div>
                    <input type="number" id={Styles.numero} />
                </div>

                <div className={Styles.node} id="node1">
                    <div className={Styles.setaParaBaixo}></div>
                    <input type="number" id={Styles.numero} />
                </div>

                <div className={Styles.node} id="node1">
                    <div className={Styles.setaParaBaixo}></div>
                    <input type="number" id={Styles.numero} />
                </div>

            </div>
        </div>
    )

}

export default BuscaBinaria;