import React from 'react'
import QuartoComponente from './QuartoComponente'
import '../../App.css'

function TerzoComponente({ user }) {
    
    
    return (
    <>
    <div className='box'>
        <h1>
            TerzoComponente
        </h1>
        <QuartoComponente user = {user}/>
    </div>
    </>
    )
}

export default TerzoComponente