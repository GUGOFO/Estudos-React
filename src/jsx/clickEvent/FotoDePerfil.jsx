import imgUrl from '../../assets/cardComponent-imgs/profilePic.png'
import imgStyles from './FotoDePerfil.module.css'

function Foto(){

    const clicado = e => {
        console.log(e.target)
        e.target.style.display = "none";
    }

    return(
        <img className={imgStyles.imagem} onClick={(e) => clicado(e)} src={imgUrl} alt="Foto de Perfil" />
    )
}

export default Foto