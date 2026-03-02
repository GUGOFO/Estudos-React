import React, {useState} from "react"

function UseState(){

    const [nome, useName] = useState("Gues");

    const updateName = () => {
        useName("Gustavo");
    }

    const [idade, useIdade] = useState(0);

    const updateIdade = () => {
        useIdade(idade + 1);
    }

    const [estaEmpregado, useEstaEmpregado] = useState(false);

    const updateEstaEmpregado = () => {
        useEstaEmpregado(!estaEmpregado);
    }

    return(
        <>
        
            <div>Nome: {nome}</div>
            <button onClick={updateName}>Update nome</button>

            <div>Idade: {idade}</div>
            <button onClick={updateIdade}>Update idade</button>

            <div>Esta empregado: {estaEmpregado ? "sim" : "não"}</div>
            <button onClick={updateEstaEmpregado}>Update status</button>
        </>
    );
}

export default UseState