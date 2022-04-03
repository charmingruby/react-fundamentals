import React from 'react'
import If from './if'

export default props => {
    return(
        <div>
            <If test={props.usuario && props.usuario.nome}>
                Welcome, {props.usuario.nome}!
            </If>

            <If test={props.usuario && !props.usuario.nome}>
                Welcome, Stranger!
            </If>

        </div> 
    )
}