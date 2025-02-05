import {React ,useState} from 'react'
import SecondoComponente from './SecondoComponente';
import '../../App.css'

function PrimoComponente() {
  const[user, setUser] = useState('Samuele')



  return (
    <>
    <div className='box'>
      <h1>PrimoComponente</h1>
      <p> ciao {user}</p>
      <SecondoComponente user={user}/>
    </div>
    </>
  )
}

export default PrimoComponente