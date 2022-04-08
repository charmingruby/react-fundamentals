import React, { Component } from 'react'

import Display from './Display'
import Buttons from './Buttons'
import StepForm from './StepForm'

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
                <Display num={this.state.num}></Display>
                <StepForm steps={this.state.steps} setStep={this.setStep}></StepForm>
                <Buttons inc={this.inc} dec={this.dec}></Buttons>

                
            </div>
        )
    }
}

export default Counter