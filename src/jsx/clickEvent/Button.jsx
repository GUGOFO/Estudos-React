function Button(){

    const clicado = () => console.log("oi, como vc ta? eu quero saber a cor da sua calcinha lalaalalallalalaala");
    
    const clicado2 = nome => console.log(`${nome} para de me clocar`)

    return(<button onClick={() => clicado2("Gustavo")}>Me clique</button>)
}

export default Button