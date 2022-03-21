import React from 'react'

import './App.css'

import Lonely from './components/basic/Lonely'
import LonelyWithParameter from './components/basic/LonelyWithParameter'
import LonelyFragment from './components/basic/LonelyFragment'
import RandomNumber from './components/basic/RandomizedNum'
import Card from './components/layouts/Card'

export default () =>
    <div class="App">
        <h1>React Fundamentals</h1>

        <div className="Cards">
            <Card title="#4 - Random Number">
                <RandomNumber
                    min={7}
                    max={18} />
            </Card>

            <Card title="#3 - Lonely Fragment">
                <LonelyFragment />
            </Card>

            <Card title="#2 - Lonely w/ Parameter">
                <LonelyWithParameter
                    title='Lonely component w/ parameters !'
                    subtitle='Lonely component made with some parameters' />
            </Card>

            <Card title="#1 - Lonely">
                <Lonely />
            </Card>
        </div>
    </div>