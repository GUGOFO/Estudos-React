import styles from "./Estudante.module.css"

function Estudantes({nome = "Guess", idade = 0, ehEstudante = false}){
    return(
        <div className={styles.estudante}>
            <p>Nome: {nome}</p>
            <p>Idade: {idade}</p>
            <p>É estudante: {ehEstudante ? "Sim" : "Não"}</p>
        </div>
    )
}

export default Estudantes