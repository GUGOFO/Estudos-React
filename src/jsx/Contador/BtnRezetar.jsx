import Styles from "./Styles.module.css"

function BtnRezetar(){
    
    const rezetar = () => {
        const display = document.querySelector("h1");
        display.textContent = 0
    }

    return(
        <div className={Styles.btn} onClick={() => rezetar()}>RESET</div>
    );
}

export default BtnRezetar