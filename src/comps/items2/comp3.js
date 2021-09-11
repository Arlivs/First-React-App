import {useState, useEffect} from 'react'

export default function Comp3(props) {
    console.log("func start");
    const [count, setCount] = useState(props.arg)
    const handler = () => {
        let countVal = count
        countVal++
        setCount(countVal)
        console.log("handler");
    }
    useEffect(() => console.log("effect"))

    console.log("comp3 render 1");
    return (
        <div> {console.log("comp3 render 2")}
            <h3 style={{marginTop:"30px"}}>Comp3</h3>
            <div>
                <button onClick={handler} style={{marginTop:"20px"}}><strong>Handler 2</strong></button>
            </div>
            <p>{count}</p>
        </div>
    )
}