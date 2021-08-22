import React from "react"
import styles from "./index.css"


let count = 0
function App() {
  return (
    <div className="app">
      <p className="paragraf">Обычный текст</p>
      <button onClick={incr} className="butn1">Минус</button>
      <button onClick={dicr} className="butn2">Плюс</button>
      <div className="paragraf">{count}</div>
    </div>
  )
}
const incr = () =>count++
const dicr = () =>count--

export default App;