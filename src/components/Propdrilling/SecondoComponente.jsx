import '../../App.css'
import React from 'react'
import TerzoComponente from './TerzoComponente';



function SecondoComponente({user}) {
  return (
    <>
    <div className='box'>
      <h1>SecondoComponente</h1>
      <TerzoComponente user = { user } />
    </div>
    </>
  )
}

export default SecondoComponente