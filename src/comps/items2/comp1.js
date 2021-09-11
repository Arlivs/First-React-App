import React, { Component } from 'react'

export default class Comp1 extends Component {
    constructor() {
        // console.log("конструктор, один раз в начале");
        super()
        this.state = {st1:0}
    }
    // static getDerivedStateFromProps(props, state) {
    //     console.log("При изменении пропсов");
    //     return {"st1": props.arg}
    // }
    handler = () => {
        let val = this.state.st1
        val++
        this.setState({st1: val})
    }
    // componentDidMount(){console.log("один раз после рендера компонента");}
    // componentDidUpdate() {console.log("каждый раз после рендера");}

    render() {
        // console.log("render 1");
        return (
            <div>  {/*{console.log("render 2")}*/}
                <h3 style={{marginTop:"30px"}}>Comp1</h3>
                <div>
                    <button onClick={this.handler} style={{marginTop:"20px"}}><strong>Handler</strong></button>
                </div>
                <p>{this.state.st1}</p>
            </div>
        )
    }
}