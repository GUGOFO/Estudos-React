import Styles from "./Styles.module.css"

function BtnDiminuir(){

    const diminuir = () => {
        const display = document.querySelector("h1");
        const num = Number(display.textContent)
        display.textContent = num - 1
    }

    return(
        <div className={Styles.btn} onClick={() => diminuir()}>-</div>
    );
}

export default BtnDiminuir