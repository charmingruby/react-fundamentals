import React from 'react'

import Lonely from './components/basic/Lonely'
import LonelyWithParameter from './components/basic/LonelyWithParameter'
import LonelyFragment from './components/basic/LonelyFragment'

export default () => 
        <div class="app">
            <h1>React Fundamentals</h1>
            <Lonely></Lonely>
            <LonelyWithParameter
                title='Lonely component w/ parameters !'
                subtitle='Lonely component made with some parameters' />
            <LonelyFragment />
        </div>