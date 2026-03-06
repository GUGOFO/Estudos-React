import React, {useState, useEffect} from "react";
import CompontenteD from "./CompontenteD";
import Style from "./style.module.css"


function CompontenteC(){

    return(
        <div className={Style.box}>
            <h1>CompontenteC</h1>
            <CompontenteD/>
        </div>
    )
}

export default CompontenteC;