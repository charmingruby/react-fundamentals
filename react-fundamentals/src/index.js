import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'
import Lonely from './components/basic/Lonely'
import LonelyWithParameter from './components/basic/LonelyWithParamewter'

ReactDOM.render(
    <div class="principal-container">
        <Lonely></Lonely>
        <LonelyWithParameter 
            title='Lonely component w/ parameters !'
            subtitle='Lonely component made with some parameters'>
        </LonelyWithParameter>
    </div>,
    document.getElementById('root')
)