import './App.css';
import Header from'./components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import ApiComponent from './components/ApiComponent';
import RegistrationForm from './components/RegistrationForm';
import PrimoComponente from './components/Propdrilling/PrimoComponente';
import ParentComponent from './components/ParentComponent';
import {createContext, React ,useState} from 'react'

export const UserContext = createContext()

function App() {

  const[username, setUsername] = useState('Marco')

  return (
  <div className="App">
    <Header isLoggedIn={true}/>
    <Header isLoggedIn={false}/> 
    <UserContext.Provider value =  { {username, setUsername} }>
      <ParentComponent/>
    </UserContext.Provider>
    <PrimoComponente/> 
    <RegistrationForm/>
    <ApiComponent/> 
    <Main/> 
    <Footer/> 
  </div> 
);
}

export default App;
