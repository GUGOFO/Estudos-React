function Button(){

    let contador = 0;

    const clicado = nome => {
        if(contador < 3){
            contador++;
            console.log(`${nome} voce me clicou ${contador} vezes!`);
        }
        else{
            console.log(`${nome.toUpperCase()} PARA DE ME CLICAR PORRA!!!!!!!!`);
        }
    }

    return(<button onClick={() => clicado("Gustavo")}>Me clique</button>)
}

export default Button