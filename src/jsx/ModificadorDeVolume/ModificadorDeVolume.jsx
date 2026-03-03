import Style from "./ModificadorDeVolume.module.css"

import React, {useState} from "react";

function Volume(){

    const [volume, useVolume] = useState(0)

    function mudarVolume(e){
        useVolume(e.target.value);
    }

    return(
    <>
        <h2>O VOLUME SELECIONADO É: {volume}</h2>
        <input type="range" onChange={(e) => mudarVolume(e)}/>
    </>
    );
}

export default Volume;