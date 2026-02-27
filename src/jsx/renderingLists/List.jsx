import styles from "./List.module.css"

function List({categoria = "Categoria", items = ""}){

    // frutas.sort((a,b) => a.nome.localeCompare(b.nome));  alfaetivo
    //frutas.sort((a,b) => b.nome.localeCompare(a.nome));   reverso alfabetico
    //frutas.sort((a,b) => a.calorias - b.calorias); calorias
    //frutas.sort((a,b) => b.calorias - a.calorias); reverso
    
    //const baixasCalorias = frutas.filter(fruta => fruta.calorias < 50);
    //const AltasCalorias = frutas.filter(fruta => fruta.calorias > 50);

    const ListaDeItens = items.map(item => <li key={item.id}>
                                                {item.nome}: &nbsp;
                                                <b>{item.calorias}</b></li>);

    return(<>
            <h3 className={styles.categoriaLista}>{categoria}</h3>
            <ol className={styles.itensLista}>{ListaDeItens}</ol>
           </>)
}

export default List