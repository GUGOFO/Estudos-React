function Button(){

    let contador = 0;

    const clicado = e => {
        const btn = e.target;
        const img = document.querySelector("img")

        img.style.display = "none"

        btn.style.backgroundColor = "red"
        btn.textContent = "DESAPARECEU TROXAO"
    } 

    return(<button onClick={(e) => clicado(e)}>Me clique</button>)
}

export default Button