import React, { Component } from 'react'

class Counter extends Component{

    state = {
        num: this.props.initialNumber || 0,
        steps: this.props.steps || 1
    }

    inc = () =>{
        this.setState({
            num: this.state.num + this.state.steps
        })
    }

    dec = () =>{
        this.setState({
            num: this.state.num - this.state.steps
        })
    }

    setStep = (e) => {
        this.setState({
            steps: +e.target.value
        })
    }

    render(){
        return(
            <div>
                <h2>Counter</h2>
                <h3>{this.state.num}</h3>

                <div>
                    <label htmlFor="stepInput">Steps: </label>
                    <input 
                    id="stepInput"
                    type="number"
                    value={this.state.steps}
                    onChange={this.setStep}
                    />
                </div>

                <button onClick={this.inc}>+</button>
                <button onClick={this.dec}>-</button>
            </div>
        )
    }
}

export default Counter