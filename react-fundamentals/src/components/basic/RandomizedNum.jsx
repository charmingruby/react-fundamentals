import React from 'react'

export default (props) => {
    const { min, max } = props
    const randomNum = Math.floor(Math.random ()* (max - min + 1) + min)

    return(
        <div>
            <h2>Randomized Value</h2>
            <p>Minimum value: { min }</p>
            <p>Maximum value: { max }</p>
            <p>Choosen number: { randomNum }</p>
        </div>
    )
}
        