import {createContext, React ,useState} from 'react'
import SecondoComponente from './SecondoComponente';
import '../../App.css'

export const UserContext = createContext();

function PrimoComponente() {

  const[user, setUser] = useState('Samuele')



  return (
    <>
    <div className='box'>
      <h1>PrimoComponente</h1>
      <p> ciao {user}</p>
      <UserContext.Provider value = { user }>
        <SecondoComponente/> 
        {/* /* precedentemente era dentro SecondoComponente per passare i dati nel secondo  user = { user }*\ */}
      </UserContext.Provider>
    </div>
    </>
  )
}

export default PrimoComponente