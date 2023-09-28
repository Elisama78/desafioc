import './App.css'
import React, { useState } from "react" //precisamos importar o useState 

export default function App() {

  const [contador, setContador] = useState(0)
 
  const Add = () => {
    if (contador < 10)
      setContador(contador + 1)
  }
 
  const Diminuir = () => {
    if (contador > 0)
      setContador(contador - 1)
  }

  return (
    <div>
    <main>
      <section>
        <h1>Contador</h1>
        <h2>{contador}</h2>
        <button onClick={Add}>Adicionar</button>
        <button onClick={Diminuir}>Diminuir</button>
      </section>
    </main>
    </div>
  )
}

