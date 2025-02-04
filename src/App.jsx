import './App.css';
import Header from'./components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import ApiComponent from './components/ApiComponent';
import RegistrationForm from './components/RegistrationForm';
function App() {

  return (
    <div className="App">
      <Header isLoggedIn={true}/>
      <Header isLoggedIn={false}/>
      <RegistrationForm/>
      <ApiComponent/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
