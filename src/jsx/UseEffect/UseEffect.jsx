import React, {useState, useEffect} from "react";

//SUPER IMPORTANTEEEEEEEE

/*

    useEffect(() => {})                 FAZ TODA VEZ Q ALGO FOR RENDERIZADO
    useEffect(() => {}, [])             SO FAZ UMA VEZ
    useEffect(() => {}, [variavel])     FAZ TODA VEZ Q A VARIAVEL Q TU POIS FOI ATUALIZADA

*/

function UseEffect(){

    const [valor, setValor] = useState(0);
    const [cor, setCor] = useState("green");

    useEffect(() => {
        document.title = `Count: ${valor} ${cor}`;
    },[valor])

    function addValor(){
        setValor(v => v + 1);
    }

    function subtractValor(){
        setValor(v => v - 1);
    }

    function trocarCor(){
        setCor(c => c === "green" ? c = "red" : c = "green");
    }

    return( <>
                <p style={{color: cor}}>Valor: {valor}</p>
                <button onClick={addValor}>+</button>
                <button onClick={trocarCor}>Trocar cor</button>
                <button onClick={subtractValor}>-</button>
            </>
    )
}

export default UseEffect;