
import React, {useState} from "react"

function ToDoList(){

    const [tarefas, setTarefas] = useState(["Almoçar", "Tomar banho"]);
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
        <div className="toDoList">
            <h1>Lista de Tarefas</h1>

            <div>
                <input type="text" placeholder="Coloque uma tarefa" value={novaTarefa} onChange={lidarInputChange}/>
                <button className="addButao" onClick={adicionarTarefas}>Add</button>
            </div>

            <ol>
                {tarefas.map((tarefa, index) => {
                    <li key={index}>
                        <span className="texto">{tarefa}</span>
                        <button className="deletar" onClick={(index) => deletarTarefa(index)}>Deletar</button>
                        <button className="cima" onClick={(index) => moverTarefaCima(index)}>Cima</button>
                        <button className="baixo" onClick={(index) => moverTarefaCima(index)}>Baixo</button>
                    </li> })}
            </ol>
        </div>
    )

}

export default ToDoList