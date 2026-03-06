import Styles from "./ToDoList.module.css"
import React, {useState} from "react"

function ToDoList(){

    const [tarefas, setTarefas] = useState(["Almoçar", "Tomar banho", "Malhar"]);
    const [novaTarefa, setNovaTarefa] = useState("");

    function lidarInputChange(e){
        setNovaTarefa(e.target.value)
    }

    function adicionarTarefas(){
        if(novaTarefa.trim() !== ""){
            setTarefas(t => [...t, novaTarefa]);
            setNovaTarefa("");
        }
    }

    function deletarTarefa(index){
        const updateTarefas = tarefas.filter((_, i) => i !== index);
        setTarefas(updateTarefas);
    }

    function moverTarefaCima(index){
        if(index > 0){
            const updateTarefas = [...tarefas];
            [updateTarefas[index], updateTarefas[index - 1]] = [updateTarefas[index - 1], updateTarefas[index]];
            setTarefas(updateTarefas)
        }
    }
    
    function moverTarefaBaixo(index){
        if(index < tarefas.length - 1){
            const updateTarefas = [...tarefas];
            [updateTarefas[index], updateTarefas[index + 1]] = [updateTarefas[index + 1], updateTarefas[index]];
            setTarefas(updateTarefas)
        }
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
                        <button className={Styles.delete} onClick={() => deletarTarefa(index)}>Deletar</button>
                        <button className={Styles.mover} onClick={() => moverTarefaCima(index)}>Cima</button>
                        <button className={Styles.mover} onClick={() => moverTarefaBaixo(index)}>Baixo</button>
                    </li>
                )}
            </ol>
        </div>
    )

}

export default ToDoList