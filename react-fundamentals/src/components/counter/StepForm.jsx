import React from 'react'

export default props => {
    return (
        <div>
            <label htmlFor="stepInput">Steps: </label>
            <input
                id="stepInput"
                type="number"
                value={props.steps}
                onChange={props.setStep}
            />
        </div>
    )
}