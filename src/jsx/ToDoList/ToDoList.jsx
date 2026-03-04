import Styles from "./ToDoList.module.css"
import React, {useState} from "react"

function ToDoList(){

    const [tarefas, setTarefas] = useState(["Almoçar", "Tomar banho", "Ser Gay"]);
    const [novaTarefa, setNovaTarefa] = useState("");

    function lidarInputChange(e){
        setNovaTarefa(e.target.value)
    }

    function adicionarTarefas(){

    }

    function deletarTarefa(index){

    }

    function moverTarefaCima(index){

    }

    function moverTarefaBaixo(index){

    }

    return(
        <div className={Styles.toDoList}>
            <h1>Lista de Tarefas</h1>

            <div>
                <input type="text" placeholder="Coloque uma tarefa" value={novaTarefa} onChange={lidarInputChange}/>
                <button className={Styles.adicionar} onClick={adicionarTarefas}>Add</button>
            </div>

            <ol>
                {tarefas.map((tarefa, index) => 
                    <li key={index}>
                        <span className={Styles.texto}>{tarefa}</span>
                        <button className={Styles.delete} onClick={deletarTarefa(index)}>Deletar</button>
                        <button className={Styles.mover} onClick={moverTarefaCima(index)}>Cima</button>
                        <button className={Styles.mover} onClick={moverTarefaBaixo(index)}>Baixo</button>
                    </li>
                )}
            </ol>
        </div>
    )

}

export default ToDoList