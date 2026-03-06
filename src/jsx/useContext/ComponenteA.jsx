import React, {useState, useEffect, createContext} from "react";
import CompontenteB from "./CompontenteB";
import Style from "./style.module.css"

export const UserContext = createContext();

function CompontenteA(){

    const [user, setUser] = useState("Gustavo");

    return(
        <div className={Style.box}>
            <h1>CompontenteA</h1>
            <h2>Ola {user}</h2>
            <UserContext.Provider value={{user, setUser} /*ACho que n pode ficar fazendo isso com varias variaveis so um teste normalmnte so manda a variave*/}> 
                <CompontenteB/>
            </UserContext.Provider>
        </div>
    )
}

export default CompontenteA;