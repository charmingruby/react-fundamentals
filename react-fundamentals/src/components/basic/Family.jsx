import React from 'react'
import FamilyMember from './FamilyMember'

export default props => 
    <div>
        <FamilyMember name="Camila" middlename= {props.middlename}/>
        <FamilyMember name="Gustavo" {...props}/>
        <FamilyMember name="Anelise" middlename= {props.middlename}/>
    </div>