import React from 'react'

import './App.css'

import Lonely from './components/basic/Lonely'
import LonelyWithParameter from './components/basic/LonelyWithParameter'
import LonelyFragment from './components/basic/LonelyFragment'
import RandomNumber from './components/basic/RandomizedNum'
import Card from './components/layouts/Card'
import Family from './components/basic/Family'
import FamilyMember from './components/basic/FamilyMember'
import StudentsList from './components/repetition/StudentsList'
import ProductsList from './components/repetition/ProductsList'

export default () =>
    <div class="App">
        <h1>React Fundamentals</h1>
        
        <div className="Cards">
            <Card title="#7 - Repetition Challenge" color="#F8E16C">
                <ProductsList/>
            </Card>

            <Card title="#6 - Repetition" color="#FB8F67">
                <StudentsList/>
            </Card>

            <Card title="#5 - Component with sons" color="#00C49A">
                <Family middlename="Dias">
                    <FamilyMember name="Camila" />
                    <FamilyMember name="Gustavo" />
                    <FamilyMember name="Anelise" />
                </Family>
            </Card>


            <Card title="#4 - Random Number" color="#FFC2B4">
                <RandomNumber
                    min={7}
                    max={18} />
            </Card>

            <Card title="#3 - Lonely Fragment" color="#F8E16C">
                <LonelyFragment />
            </Card>

            <Card title="#2 - Lonely w/ Parameter" color="#FB8F67">
                <LonelyWithParameter
                    title='Lonely component w/ parameters !'
                    subtitle='Lonely component made with some parameters' />
            </Card>

            <Card title="#1 - Lonely" color="#00C49A">
                <Lonely />
            </Card>
        </div>
    </div>