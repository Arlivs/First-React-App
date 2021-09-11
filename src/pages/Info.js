import {Link, Route} from "react-router-dom";
import { createRef, useState } from "react";
import Comp2 from "../comps/items2/comp2"
import Comp1 from "../comps/items2/comp1"
import "../css/index.css"

export default function Info(props) {
    const listItem = Array.from(props.data)
    .map(el =><Link
        className="list-item" 
        to={el.href}  
        key={Math.random()}>{el.title}
    </Link>)
    const funcKey = () => {
        textOut.current.innerHTML = textInput.current.value
        stFunc(textInput.current.value)
    }
    const textInput = createRef()
    const textOut = createRef()
    const [stateText, stFunc] = useState("текст")
    return(<>
    <section className="info">
        <div className="container">
            <div className="info-header">
                <p className="info-title">
                    Here you can search all information about this application
                </p>
                <ul>
                    {listItem}
                    <Link exact to="/info">Back to title</Link>
                </ul>
                <input type="text" onKeyUp={funcKey} ref={textInput} defaultValue="sdf"/>
                <h3 style={{marginTop:"10px"}} ref={textOut}></h3>: Сделано ссылкой на значение элемента
                <h2 style={{marginTop:"10px"}}>{stateText}</h2>: Сделано с помощью состояния
            </div>
            <Route path="/info/comp1"><Comp1/>
            </Route>
            <Route exact path="/comp2"><Comp2/>
            </Route>
        </div>
    </section>
    </>
    )
}