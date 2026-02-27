
function List(){

    const frutas = [{id: 1 ,nome: "maça", calorias: 30},
                    {id: 2 ,nome: "laranja", calorias: 60},
                    {id: 3 ,nome: "banana", calorias: 20},
                    {id: 4 ,nome: "cereja", calorias: 30665}];

    // frutas.sort((a,b) => a.nome.localeCompare(b.nome));  alfaetivo
    //frutas.sort((a,b) => b.nome.localeCompare(a.nome));   reverso alfabetico
    //frutas.sort((a,b) => a.calorias - b.calorias); calorias
    //frutas.sort((a,b) => b.calorias - a.calorias); reverso
    
    //const baixasCalorias = frutas.filter(fruta => fruta.calorias < 50);
    //const AltasCalorias = frutas.filter(fruta => fruta.calorias > 50);

    const ListaDeItens = frutas.map(fruta => <li key={fruta.id}>
                                                {fruta.nome}: &nbsp;
                                                <b>{fruta.calorias}</b></li>);

    return(<ol>{ListaDeItens}</ol>)
}

export default List