import React, {useState} from "react";
import Styles from "./WatsapClone.module.css"

function WatsapClone(){

    const [msgEnviada, setMsgEnviada] = useState("");
    const [msgRecebida, setMsgRecebida] = useState("");
    const [historicoConversas, setHistoricoConversas] = useState([{texto: "Oii", classe: "enviadorMsg"}, {texto: "E ai como vc esta?", classe: "recebidorMsg"}]);

    function updateMsgEnviada(e){
        setMsgEnviada(e.target.value);
    }

    function updateMsgRecebida(e){
        setMsgRecebida(e.target.value);
    }

    function submitMsgEnviada(e){
        e.preventDefault()
    }

    function submitMsgRecebida(e){
        e.preventDefault()
    }

    return(
        <div id={Styles.containerPrograma}>

            <div id={Styles.divConversas}>
                <div className={Styles.enviadorMsg}></div>
                <div className={Styles.recebidorMsg}></div>
                {historicoConversas.map((mensagem, index) => 
                    <div key={index} 
                         className={mensagem.classe === "enviadorMsg" ? Styles.enviadorMsg : Styles.recebidorMsg}>
                        
                        {mensagem.texto}
                    </div>
                )}
            </div>

            <div id={Styles.divInputs}>

                <form id={Styles.divRecebedorInput} className={Styles.divInput} onSubmit={(e) => submitMsgRecebida(e)}>
                    <input type="text" id={Styles.recebedorInput} onChange={(e) => updateMsgRecebida(e)} autoComplete="off" placeholder="Responda a mensagem" />
                    <input type="submit" id={Styles.recebedorBtn} value=">" />
                </form>

                <form id={Styles.divEnviadorInput} className={Styles.divInput} onSubmit={(e) => submitMsgEnviada(e)}>
                    <input type="text" id={Styles.enviadorInput} onChange={(e) => updateMsgEnviada(e)} autoComplete="off" placeholder="Envia a mensagem" />
                    <input type="submit" id={Styles.enviadorBtn} value=">" />
                </form>

            </div>

        </div>
    )

}

export default WatsapClone;