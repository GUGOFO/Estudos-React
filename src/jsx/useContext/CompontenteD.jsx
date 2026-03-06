import React, {useState, useEffect, useContext} from "react";
import Style from "./style.module.css"
import {UserContext} from "./componenteA";

function CompontenteD(){

    const ConstUser = useContext(UserContext); //ACho que n pode ficar fazendo isso com varias variaveis so um teste normalmnte so manda a variavel

    function click(){
        ConstUser.setUser(u => u == "Gustavo" ? u = "Ana" : "Gustavo")
    }


    return(
        <div className={Style.box}>
            <h1>CompontenteD</h1>
            <h2 onClick={click}>{`Tchau ${ConstUser.user}`}</h2>
        </div>
    )
}

export default CompontenteD;