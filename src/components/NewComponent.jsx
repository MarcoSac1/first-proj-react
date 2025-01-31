import { useState } from 'react';
import '../App.css';

function NewComponent(){
    const [person, setPerson] = useState('Marco');


return(
    <>
    <div>
        <h1>ciao sono: {person}</h1>
        <button onClick={()=>setPerson(person === 'Marco' ? 'Franco':'Marco')}>Change Peson</button>
    </div>
    </>
)
}
export default NewComponent;