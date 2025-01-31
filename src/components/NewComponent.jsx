import { useState } from 'react';
import '../App.css';

function NewComponent() {
    
    const [person, setPerson] = useState('Marco');// Definisce lo stato 'person' con valore iniziale 'Marco'
    
    const [paraghaph, setParagraph] = useState('');//  Definisce lo stato 'paraghaph' con valore iniziale vuoto

    const handleInputChange = (e) => { //Funzione per gestire il cambiamento dell'input
        
        setParagraph(e.target.value);//  Aggiorna lo stato 'paraghaph' con il valore dell'input
    };

    return (
        <>
            <div>
            {/* // Mostra il valore dello stato 'person' */}
                <h1>ciao sono: {person}</h1> 

                {/*  Bottone per cambiare il valore dello stato 'person' */}
                <button onClick={() => setPerson(person === 'Marco' ? 'Franco' : 'Marco')}>Change Person</button> 

                {/* //Input per inserire testo, che aggiorna lo stato 'paraghaph' */}
                <input  onChange={handleInputChange} type="text" /> 

                {/* // Paragrafo che mostra il valore dello stato 'paraghaph' */}
                <p>{paraghaph}</p> 
            </div>
        </>
    );
}

export default NewComponent;