import React from 'react'

import Lonely from './components/basic/Lonely'
import LonelyWithParameter from './components/basic/LonelyWithParameter'
import LonelyFragment from './components/basic/LonelyFragment'
import RandomNumber from './components/basic/RandomizedNum'

export default () => 
        <div class="app">
            <h1>React Fundamentals</h1>

            <RandomNumber
                min = {7}
                max = {18} />

            <Lonely/>
            
            <LonelyWithParameter
                title='Lonely component w/ parameters !'
                subtitle='Lonely component made with some parameters' />
            <LonelyFragment />
        </div>