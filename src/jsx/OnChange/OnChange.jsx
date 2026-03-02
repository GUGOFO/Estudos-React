
import React, {useState} from "react"

function OnChange(){

    const [name, setName] = useState("Guest");
    const [quantidade, setQuantidade] = useState(0);
    const [comentario, setComentario] = useState("");
    const [pagamento, setPagamento] = useState("");
    const [envio, setEnvio] = useState("");

    function handleNameChange(event){
        setName(event.target.value)
    }

    function handleQuantidadeChange(event){
        setQuantidade(event.target.value)
    }

    function handleComentarioChange(event){
        setComentario(event.target.value)
    }

    function handlePagamentoChange(event){
        setPagamento(event.target.value)
    }

    function handleEnvioChange(event){
        setEnvio(event.target.value)
    }

    return(
        <div>
            <input type="text" value={name} onChange={handleNameChange}/>
            <p>Name: {name}</p>

            <input type="number" value={quantidade} onChange={handleQuantidadeChange}/>
            <p>Quantidade: {quantidade}</p>

            <textarea value={comentario} onChange={handleComentarioChange} placeholder="Coloque instruções de entrega"/>
            <p>Comentario: {comentario}</p>

            <select value={pagamento} onChange={handlePagamentoChange}>
                <option value="">Selecione uma opção</option>
                <option value="Visa">VISA</option>
                <option value="Mastercard">MASTERCARD</option>
                <option value="Pix">PIX</option>
            </select>
            <p>Pagamennto: {pagamento}</p>

            <label>
                <input type="radio" value="Pick Up" checked={envio==="Pick Up"} onChange={handleEnvioChange} />
                Pick Up
            </label>
            <label>
                <input type="radio" value="Delivery" checked={envio==="Delivery"} onChange={handleEnvioChange} />
                Delivery
            </label>
            <p>Shipping: {envio}</p>
        </div>
    );
}

export default OnChange