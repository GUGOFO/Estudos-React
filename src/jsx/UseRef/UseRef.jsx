import React, {useRef, useEffect, useState} from "react";

//Use ref n aciona reloud

// usa-se em: 
//              1. Interações com o DOM
//              2. Focus, animação e transições
//              3. Timers e Intervalos

function UseRef(){

    const ref = useRef(0);
    const inputRef = useRef(null);

    useEffect(() => {
        console.log("Componente Renderizado");
        console.log(ref)
        console.log(inputRef)
    })

    function Aumentar(){
        ref.current++
        console.log(ref.current)
        inputRef.current.focus();
        inputRef.current.style.backgroundColor = "red";
    }

    return(<>

        <button onClick={Aumentar}>
            Clica aqui: {ref.current}
        </button>

        <input ref={inputRef}/>
        
    </>)

}

export default UseRef;