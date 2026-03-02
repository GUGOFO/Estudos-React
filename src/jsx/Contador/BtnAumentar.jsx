import Styles from "./Styles.module.css"

function BtnAumentar(){
    
    const aumentar = () => {
        const display = document.querySelector("h1");
        const num = Number(display.textContent)
        display.textContent = num + 1
    };

    return(
        <div className={Styles.btn} onClick={() => aumentar()}>+</div>
    );
}

export default BtnAumentar