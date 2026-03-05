import React, { useState, useEffect } from "react";
import Styles from "./CalculadoraGeometrica.module.css"

function CalculadoraGeometrica(){

    const formasGeometricas = ["circulo", "quadrado", "triangulo"]

    const [valor, setValor] = useState("0")
    const [estiloFormaGrande, setEstiloFormaGrande] = useState(formasGeometricas[0])
    const [estiloFormaPequena1, setEstiloFormaPequena1] = useState(formasGeometricas[1])
    const [estiloFormaPequena2, setEstiloFormaPequena2] = useState(formasGeometricas[2])
    const [area, setArea] = useState("Area: 0.00cm");
    const [perimetro, setPerimetro] = useState("Perimetro: 0.00cm");
    
    function autalizarValor(e) {
        setValor(e.target.value);
    }

    function trocaGeometrica(grande, pequena, numForma) {
        const temp = grande;
        setEstiloFormaGrande(pequena);
        numForma === "pequena1" ? setEstiloFormaPequena1(temp) : setEstiloFormaPequena2(temp);
    }
    
    useEffect(() => {
        const v = parseFloat(valor) || 0; 

        switch (estiloFormaGrande) {
            case "circulo":
                setArea(`Area: ${(Math.PI * Math.pow(v / 2, 2)).toFixed(2)}cm`);
                setPerimetro(`Perimetro: ${(2 * Math.PI * (v / 2)).toFixed(2)}cm`);
                break;
            case "quadrado":
                setArea(`Area: ${(v * v).toFixed(2)}cm`);
                setPerimetro(`Perimetro: ${(4 * v).toFixed(2)}cm`);
                break;
            case "triangulo":
                setArea(`Area: ${( (v * v * Math.sqrt(3)) / 4 ).toFixed(2)}cm`);
                setPerimetro(`Perimetro: ${(3 * v).toFixed(2)}cm`);
                break;
            default:
                break;
        }
    }, [valor, estiloFormaGrande]);

    return(
        <div id={Styles.conteinerPrincipal}>
            <div id={Styles.containerFormaGrand}>
                <div id={Styles[`${estiloFormaGrande}Grande`]}></div>
            </div>
            <div id={Styles.btns}>
                <input type="number" min="0" max="10000" id={Styles.numero} onChange={(e) => autalizarValor(e)} value={valor}/>
                <div id={Styles.resultados}>
                    <div id={Styles.area} className={Styles.resultado}>{area}</div>
                    <div id={Styles.perimetro} className={Styles.resultado}>{perimetro}</div>
                </div> 
            </div>
            <div id={Styles.formasGeometricas}>
                <div id={Styles.containerFormaPequena1}>
                    <div id={Styles[`${estiloFormaPequena1}Pequeno`]} onClick={() => trocaGeometrica(estiloFormaGrande, estiloFormaPequena1, "pequena1")}></div>
                </div>
                <div id={Styles.containerFormaPequena2}>
                    <div id={Styles[`${estiloFormaPequena2}Pequeno`]} onClick={() => trocaGeometrica(estiloFormaGrande, estiloFormaPequena2, "pequena2")}></div>
                </div>
            </div>
        </div>
    )

}

export default CalculadoraGeometrica;