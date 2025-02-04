import { useState, useEffect } from "react";
import '../App.css';
function ApiComponent() {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                setCards(data.data); // Assumi che i dati delle carte siano nella proprietà 'data'
            })
            .catch((error) => {
                console.error('There was a problem with the fetch operation:', error);
            });
    }, []);

    return (
        <div>
            <h1>Cards</h1>
            <ul>
                {cards.map((card) => (
                    <li key={card.id}>
                    <p><strong>card name:</strong>{card.name}</p>
                    <p><strong>card archetype:</strong> {card.archetype} </p>
                    <img src={card.card_images[0].image_url_small} alt="" />
                    </li> 
                ))}
            </ul>
        </div>
    );
}

export default ApiComponent;