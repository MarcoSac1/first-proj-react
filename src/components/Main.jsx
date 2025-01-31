import '../App.css';
import Card from './Card.jsx';
import NewComponent from './NewComponent';


function Main(){
    const people = [
        { title: 'Marco', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quisquam commodi tenetur iste consectetur,', imgUrl: 'https://i.redd.it/ys546mxqmrfe1.jpeg' ,isVisited:false,isAdmin:true },
        { title: 'Elisa', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quisquam commodi tenetur iste consectetur,', imgUrl: 'https://preview.redd.it/a-few-samples-of-my-past-and-future-profile-pics-v0-j4wjtg49mfce1.jpg?width=474&format=pjpg&auto=webp&s=64c9da2232cefeda62048b2202a43fc6dbca4022',isVisited:true,isAdmin:false },
        { title: 'Franco', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quisquam commodi tenetur iste consectetur,', imgUrl: 'https://preview.redd.it/a-few-samples-of-my-past-and-future-profile-pics-v0-j4wjtg49mfce1.jpg?width=474&format=pjpg&auto=webp&s=64c9da2232cefeda62048b2202a43fc6dbca4022',isVisited:false,isAdmin:true },
        // Aggiungi altre persone qui
    ];
    return(
        <>
        <div class='main-content'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quisquam commodi tenetur iste consectetur, corrupti deserunt temporibus voluptates aperiam placeat ex aut facilis magni fugiat quo quidem quibusdam quasi pariatur.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quisquam commodi tenetur iste consectetur, corrupti deserunt temporibus voluptates aperiam placeat ex aut facilis magni fugiat quo quidem quibusdam quasi pariatur.</p>

        </div>
        <NewComponent/>
        <section class='card-section'>
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
        </section>

        </>
    )
};

export default Main;