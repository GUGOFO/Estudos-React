import List from "./jsx/renderingLists/List.jsx";

function App(){

    const frutas = [{id: 1 ,nome: "maça", calorias: 30},
                    {id: 2 ,nome: "laranja", calorias: 60},
                    {id: 3 ,nome: "banana", calorias: 20},
                    {id: 4 ,nome: "cereja", calorias: 30665}];

    const vegetais = [{id: 1 ,nome: "batata", calorias: 130},
                    {id: 2 ,nome: "salada", calorias: 10},
                    {id: 3 ,nome: "cenoura", calorias: 25},
                    {id: 4 ,nome: "milho", calorias: 63}];

    const carnes = []

    return(
        <>
            {frutas.length > 0 && <List items={frutas} categoria="Frutas"/>}
            {vegetais.length > 0 && <List items={vegetais} categoria="Vegetais"/>}
            {carnes.length > 0 && <List items={carnes} categoria="Carnes"/>}
        </>
    );
}

export default App