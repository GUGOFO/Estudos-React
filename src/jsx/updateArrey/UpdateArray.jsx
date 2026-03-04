import React, {useState} from "react";

function UpdateArray(){
    
    const [comidas, setComidas] = useState(["Maçã", "Laranja", "Melancia"]);

    function adicionarFruta(){
        const novaFruta = document.getElementById("inputComida").value;
        document.getElementById("inputComida").value = "";

        novaFruta != "" ? setComidas(c => [...c, novaFruta]) : null;
    }

    function deletarFruta(index){

        setComidas(comidas.filter((_, i) => i !== index))
    }

    return(
        <>
            <h2>Lista de Frustas</h2>
            <ul>
                {comidas.map((comida, index) => <li key={index} onClick={() => deletarFruta(index)} >{comida}</li>)}
            </ul>
            <input type="text" id="inputComida" placeholder="Coloque nome de comidas" />
            <button onClick={adicionarFruta}>Adicione a comida</button>
        </>
    )
}

export default UpdateArray