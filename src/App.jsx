import BtnDiminuir from "./jsx/Contador/BtnDiminuir.jsx";
import BtnAumentar from "./jsx/Contador/BtnAumentar.jsx";
import BtnRezetar from "./jsx/Contador/BtnRezetar.jsx";
import Display from "./jsx/Contador/Display.jsx";

import Styles from "./jsx/Contador/Styles.module.css"

function App(){

    return(
        <div className={Styles.container}>
            <Display/>
            <div className={Styles.btnDivs}>
                <BtnDiminuir/>
                <BtnRezetar/>
                <BtnAumentar/>
            </div>
        </div>
    );
}

export default App