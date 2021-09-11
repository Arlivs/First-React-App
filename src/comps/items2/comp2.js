import React, { useState , createRef} from 'react'
import Comp1 from './comp1'
import Comp3 from './comp3'

export default function Comp2() {
    const [count, setCount] = useState(0)
    const [comment, setComments] = useState([])
    let comm = createRef()
    const handler = () => {
        let curCount = count
        curCount++
        setCount(curCount)
    }
    //////
    const AddComm = () => {
        let comValue = comm.current.value
        if(!comValue) return
        let comments = [...comment, comValue]
        setComments(comments)
        comm.current.value = ""
    } /////
    return(
    <>
    <section className="comp2">
        <div className="container">
            <div>
                <h1>State</h1>
                <button onClick={handler}>punch plus</button>
                <p>{count}</p>
            </div>
            <div>
                <h3 className="comp2-comments">Comments</h3>
                <textarea ref={comm}/>
                <div>
                    <button onClick={AddComm}>comms</button>
                </div>
                <ul>
                    {comment.map( item => <li key={Math.random()}>{item}</li>)}
                </ul>
            </div>
            <div className="comp-box">
                <Comp1 arg={101}></Comp1>
                <Comp3 arg={101}></Comp3>
            </div>
        </div>
    </section>
    </>
    )
}