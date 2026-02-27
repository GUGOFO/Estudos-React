import UserGreating from "./jsx/ConditionalRendering/UserGreating.jsx";

function App(){
    return(
        <>
            <UserGreating estaLogado={false} userName="Gugofo"/>
        </>
    );
}

export default App