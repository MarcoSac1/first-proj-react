import {React, useContext }from 'react'
import '../../App.css'
import { UserContext } from './PrimoComponente'


function QuartoComponente() {

    const user = useContext(UserContext)

    return (
    <div className='box'>
        <p>ciao { user }</p>
        <h1>QuartoComponente</h1>
    </div>
    )
}

export default QuartoComponente