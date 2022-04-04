import React from 'react'
import DirectChild from './DirectChild'

export default props => {
    return(
        <div>
            <DirectChild name='Ruby' age={22} nerd={true}></DirectChild>
            <DirectChild name='Gypsy' age={13} nerd={false}></DirectChild>
        </div>
    )
}