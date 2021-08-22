import React, { useState } from "react"
import styles from "./index.css"

function App() {
  let [count, setNum] = useState("0")
  return (
    <div className="app">
      <p className="paragraf">Обычный текст</p>
      <button onClick={()=> setNum(--count)} className="butn1">Минус</button>
      <button onClick={()=> setNum(++count)} className="butn2">Плюс</button>
      <div className="paragraf">{count}</div>
    </div>
  )
}

export default App;