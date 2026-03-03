import Styles from "./ColorPiker.module.css"

import React, {useState} from "react";

function ColorPiker(){

    const [cor, setCor] = useState("#000000")

    function mudarCor(e){
        setCor(e.target.value);
    }

    return(
    <>
        <h1>Color Picker</h1>
        <div className={Styles.DisplauDasCores} style={{backgroundColor: cor}}>
            <p>Cor selecionada: {cor}</p>
        </div>
        <h2>Select a color</h2>
        <input type="color" value={cor} onChange={(e) => mudarCor(e)} />
    </>
    );
}

export default ColorPiker;