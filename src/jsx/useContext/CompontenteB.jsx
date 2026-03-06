import React, {useState, useEffect} from "react";
import CompontenteC from "./CompontenteC";
import Style from "./style.module.css"

function CompontenteB(){

    return(
        <div className={Style.box}>
            <h1>CompontenteB</h1>
            <CompontenteC/>
        </div>
    )
}

export default CompontenteB;