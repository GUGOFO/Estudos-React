# Estudos React

Esse projeto foi feito para que eu consiga aprender mais sobre react, sera bem parecido com meu "Bascio Front", caso n tenha visto recomendo dar uma passada la e ver <3. Espero que esse projeto me ajude para que eu me torne um desenvolvedor front melhor, mesmo que eu não queira virar isso no futuro lslaslla, é apenas um paço no caminho.

## Como rodar?

Para quem nunca mecheu no react pode parecer dificil rodar, especialmente que voce tera que instalar alguns arquivos, porem para rodar é facil, apenas abra o terminal e coloque esses codigos:

### Instalar pacotes
```bash
npm install
```

### Rodar codigo
```bash
npm run dev
```

Apos isso entre no http que aparece, normalmente http://localhost:5173/

Boa sorte, espero que goste doque vera

## "Quero entrar em um projeto especifico"

Para isso, va no App.jsx na pasta src e troque o nome do cominho do inport e o nome para o projeto que voce quer

### Exemplo:

```bash

import BuscaBinaria from "./jsx/_Projetos/BuscaBinaria/BuscaBinaria";

function App(){

    return(
        <>
            <BuscaBinaria/>
        </>
    );
}

export default App

```