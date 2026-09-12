import React from "react";
import Bola from "./bola";

function heap(){

    const VetorDeNumeros = [1,10,3,4,5,6,7,8,9,10];

    return(
        <div>
            {VetorDeNumeros.map((bola) => 
                <Bola numero={bola}></Bola>
            )}
        </div>
    )
}

export default heap;