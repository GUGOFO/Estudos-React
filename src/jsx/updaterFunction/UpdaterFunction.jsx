import React, {useState} from "react";

/*
    TATATA deixa eu explicar, quando voce tenta 
    atualizar 2x seguidas com o setValor o react n atualiza
    toda vezz, porem so quando a função acabar, ai ele atualiza

    portando fazer:
        setValor(valor - 1);
        setValor(valor - 1);
        setValor(valor - 1);
        
    É igual a:
        setValor(0 - 1);
        setValor(0 - 1);
        setValor(0 - 1);
        
*/
function Updater(){

    const [valor, setValor] = useState(0);

    function diminuir(){
        setValor( v => v - 1);
        setValor( v => v - 1);
        setValor( v => v - 1);
    }

    function rezetar(){
        setValor(0);
    }

    function aumentar(){
        setValor( v => v + 1);
        setValor( v => v + 1);
        setValor( v => v + 1);
    }

    return(
        <>
            <h1>Contador: {valor}</h1>
            <div>
                <button onClick={diminuir}>Diminuir</button>
                <button onClick={rezetar}>Rezetar</button>
                <button onClick={aumentar}>Aumentar</button>
            </div>
        </>
    );

}

export default Updater;