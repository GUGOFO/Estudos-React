import React, {useState} from "react";

/*
    TATATA deixa eu explicar, quando voce tenta 
    atualizar 2x seguidas com o useValor o react n atualiza
    toda vezz, porem so quando a função acabar, ai ele atualiza

    portando fazer:
        useValor(valor - 1);
        useValor(valor - 1);
        useValor(valor - 1);
        
    É igual a:
        useValor(0 - 1);
        useValor(0 - 1);
        useValor(0 - 1);
        
*/
function Updater(){

    const [valor, useValor] = useState(0);

    function diminuir(){
        useValor( v => v - 1);
        useValor( v => v - 1);
        useValor( v => v - 1);
    }

    function rezetar(){
        useValor(0);
    }

    function aumentar(){
        useValor( v => v + 1);
        useValor( v => v + 1);
        useValor( v => v + 1);
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