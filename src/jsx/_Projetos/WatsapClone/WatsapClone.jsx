import React, {useState} from "react";
import Styles from "./WatsapClone.module.css"


function WatsapClone(){

    return(
        <div id={Styles.containerPrograma}>

            <div id={Styles.divConversas}>
                <div className={Styles.enviadorMsg}></div>
                <div className={Styles.recebidorMsg}></div>
            </div>

            <div id={Styles.divInputs}>

                <form id={Styles.divRecebedorInput} className={Styles.divInput}>
                    <input type="text" id={Styles.recebedorInput} autoComplete="off" placeholder="Responda a mensagem" />
                    <input type="submit" id={Styles.recebedorBtn} value=">" />
                </form>

                <form id={Styles.divEnviadorInput} className={Styles.divInput}>
                    <input type="text" id={Styles.enviadorInput} autoComplete="off" placeholder="Envia a mensagem" />
                    <input type="submit" id={Styles.enviadorBtn} value=">" />
                </form>

            </div>

        </div>
    )

}

export default WatsapClone;