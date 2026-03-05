import React, {useState} from "react";
import Styles from "./PedraPapelTesoura.module.css"

function PedraPapelTesoura(){
    
    const escolhasPossiveis = ["PEDRA", "PAPEL", "TESOURA"] 
    const [resultado, setResultado] = useState({text: "ESCOLHA", id: ""});
    
    function jogada(escolhaPlayer){
    
        const escolhaBot = escolhasPossiveis[Math.floor((Math.random() * 3))];

        if(escolhaBot === escolhaPlayer){
            setResultado({text: "EMPATEEEE", id: "empate"})
            return;
        }

        switch(true){
            case escolhaPlayer === escolhasPossiveis[0]:
                escolhaBot === escolhasPossiveis[1] ? setResultado({text: "PERDEUUU", id: "perdeu"}) :
                                                      setResultado({text: "GANHOUUU", id: "ganhou"});
                break;
            case escolhaPlayer === escolhasPossiveis[1]:
                escolhaBot === escolhasPossiveis[0] ? setResultado({text: "GANHOUUU", id: "ganhou"}):
                                                      setResultado({text: "PERDEUUU", id: "perdeu"});
                break;
            default:
                escolhaBot === escolhasPossiveis[0] ? setResultado({text: "PERDEUUU", id: "perdeu"}):
                                                      setResultado({text: "GANHOUUU", id: "ganhou"});
                break;
        }
    }
    
    return(
        <div id={Styles["jogo-completo"]}>

            <div id={Styles["div-escolhas"]}>
                <button id={Styles["pedra"]} onClick={() => jogada(escolhasPossiveis[0])}>🗿</button>
                <button id={Styles["papel"]} onClick={() => jogada(escolhasPossiveis[1])}>🧻</button>
                <button id={Styles["tesoura"]} onClick={() => jogada(escolhasPossiveis[2])}>✂️</button>
            </div>

            <div id={Styles["div-resultado"]}>
                <div id={Styles[resultado.id]}>{resultado.text}</div>
            </div>

        </div>
    );

}

export default PedraPapelTesoura;