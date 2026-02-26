// 1. Extenal -> no seu index.js
// 2. Modules -> criar um CSS para seu objeto (Melhor)
// 3. INLINE -> No meio do HTML

import styles from "./Button.module.css"

function Button(){
    return(<button className={styles.botão}>Clica aqui</button>)
}

export default Button