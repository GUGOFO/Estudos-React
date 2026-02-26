
function Food(){

    const comida1 = "Laranja"
    const comida2 = "Banana"

    return(
        <ul>
            <li>Maça</li>
            <li>{comida1}</li>
            <li>{comida2.toUpperCase()}</li>
        </ul>
    );
}

export default Food