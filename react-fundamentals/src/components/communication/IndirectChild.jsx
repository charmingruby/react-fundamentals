import React from 'react'

export default props => {
    const cb = props.click
    return (
        <div>
            <div>
                Child
            </div>

            <button onClick={e => cb('Snow', 53, true)}>
                Submit Infos
            </button>
        </div>
    )
}