import React, {useState} from "react";

function updateArrayObject(){
    
    const [carros, setCarros] = useState([]);
    const [carroAno, setCarroAno] = useState(new Date().getFullYear());
    const [carroCriador, setCarroCriador] = useState("");
    const [carroModelo, setCarroModelo] = useState("");

    function adicionarCarro(){

        const novoCarro = {ano: carroAno,
                           criador: carroCriador,
                           modelo: carroModelo};

        setCarros(c => [...c, novoCarro]);

        setCarroAno(new Date().getFullYear())
        setCarroCriador("")
        setCarroModelo("")
    }

    function removerCarro(index){
        setCarros(c => c.filter((_, i) => i !== index));
    }

    function modificarAno(e){
        setCarroAno(e.target.value);
    }

    function modificarCriador(e){
        setCarroCriador(e.target.value);
    }

    function modificarModelo(e){
        setCarroModelo(e.target.value);
    }


    return(
        <>
            <h2>Lista de Carros</h2>
            <ul>
                {carros.map((carro, index) => <li key={index} onClick={() => removerCarro(index)} >{carro.ano} {carro.criador} {carro.modelo}</li>)}
            </ul>

            <input type="number" value={carroAno} onChange={modificarAno}/> <br />
            <input type="text" value={carroCriador} onChange={modificarCriador} placeholder="Criador do carro"/> <br />
            <input type="text" value={carroModelo} onChange={modificarModelo} placeholder="Modelo do carro"/> <br />

            <button onClick={adicionarCarro}>Adicionar carro</button>
        </>
    );
}

export default updateArrayObject;