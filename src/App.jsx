import Estudante from "./jsx/estudante/estudante.jsx";

function App(){
    return(
        <>
            <Estudante nome="Gustavo" idade={30} ehEstudante = {true}/>
            <Estudante nome="Ana" idade={20} ehEstudante = {true}/>
            <Estudante nome="Criança" idade={10} ehEstudante = {false}/>
            <Estudante/>
        </>
    );
}

export default App