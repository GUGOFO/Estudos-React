import style from "./UserGreating.module.css"

function UserGreating(props){

    const mensagemDeOi = <h2 className={style.UserGreating}>Bem vindo {props.userName}</h2> ;
    const mensagemDeLogin = <h2 className={style.login}>Login pfv</h2>

    return props.estaLogado ? mensagemDeOi : mensagemDeLogin

}

export default UserGreating