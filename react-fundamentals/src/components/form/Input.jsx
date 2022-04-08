import React, {useState} from 'react'

export default props => {
    const [value, setValue] = useState('Initial')

    function type(e){
        setValue(e.target.value)
    }

    return (
        <div>
            <input value={value} onChange={type}/>
        </div>
    )
}