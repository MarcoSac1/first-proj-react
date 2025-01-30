import './App.css';
import Header from'./components/Header';
import Main from './components/Main';
import Card from './components/Card.jsx';
import Footer from './components/Footer';


function App() {

  const people = [
    { title: 'Marco', description: 'lorem', imgUrl: 'https://i.redd.it/ys546mxqmrfe1.jpeg' ,isVisited:false,isAdmin:true },
    { title: 'Elisa', description: 'Description 2', imgUrl: 'https://preview.redd.it/a-few-samples-of-my-past-and-future-profile-pics-v0-j4wjtg49mfce1.jpg?width=474&format=pjpg&auto=webp&s=64c9da2232cefeda62048b2202a43fc6dbca4022',isVisited:true,isAdmin:false },
    // Aggiungi altre persone qui
  ];
  
  return (
    <div className="App">
      <Header isLoggedIn={true}/>
      <Header isLoggedIn={false}/>
      <Main/>
      {people.map((person, index) => (
        
        <Card
        key={index}
        title={person.title}
        description={person.description}
        imgUrl={person.imgUrl}
        isVisited={person.isVisited}
        isAdmin ={person.isAdmin}
        />
      ))}
      <Footer/>
    </div>
  );
}

export default App;
