import React, {useState} from "react";

function UpdateObjects(){

    const [carro, setCarro] = useState({ano: 2020,
                                        contrutor: "BYD",
                                        modelo: "Tesla"});

    function modificarAno(e){
        setCarro(c => ({...c, ano: e.target.value}));
    }

    function modificarConstrutor(e){
        setCarro(c => ({...c, contrutor: e.target.value}))
    }

    function modificarModelo(e){
        setCarro(c => ({...c, modelo: e.target.value}))
    }

    return(
        <>
            <p>Seu carro favorito é: {carro.ano} {carro.contrutor} {carro.modelo}</p>

            <input type="number" value={carro.ano} onChange={modificarAno}/><br />
            <input type="text" value={carro.contrutor} onChange={modificarConstrutor}/><br />
            <input type="text" value={carro.modelo} onChange={modificarModelo}/>
        </>
    )
}

export default UpdateObjects