import React from 'react'
import IndirectChild from './IndirectChild'

export default props => {

    let name = '?'
    let age = 0
    let nerd = false

    function getInfo(nameParam, ageParam, nerdParam) {
        name = nameParam
        age = ageParam
        nerd = nerdParam
        console.log(name, age, nerd)
    }
    return (
        <div>
            <div>
                <span>{name} </span>
                <span>{age} </span>
                <span>{nerd ? 'Truth' : 'Lie'}</span>
            </div>

            <IndirectChild click={getInfo}></IndirectChild>
        </div>
    )
}