import './App.css';
import Header from'./components/Header';
import Main from './components/Main';
import Footer from './components/Footer';


function App() {

  return (
    <div className="App">
      <Header isLoggedIn={true}/>
      <Header isLoggedIn={false}/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
