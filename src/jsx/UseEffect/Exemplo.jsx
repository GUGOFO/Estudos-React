import React, {useState, useEffect} from "react";

function Exemplo(){

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    const [cor, setCor] = useState("green");

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        setCor(c => c === "green" ? c = "red" : c = "green");
        console.log("EVENTO ADICIONADO");

        return () => {
            window.removeEventListener("resize", handleResize);
            console.log("removido")
        }
    }, [])

    useEffect(() => {
        document.title = `${width} x ${height}`;
    }, [height, width]);

    function handleResize(){
        setWidth(window.innerWidth)
        setHeight(window.innerHeight);
    }

    return(<>
        <p style={{color: cor}}>Window Width: {width}px</p>
        <p>Window Height: {height}px</p>
    </>)

}

export default Exemplo;