import React from 'react'
import { Link } from 'react-router-dom'
function Error() {
    return (
    <div>
        <h1>
            Error 404: NOT FOUND
        </h1>
        <p>
            questo componente non esiste
        </p>
        <p>
            ritorna alla home
        </p>
        <Link to="/">Torna</Link>
        {/* <h1>
            <a href="/">Torna tramite A </a> //navigando tramite href='' vado a ricaricale la pagina ogni volta
            
        </h1> */}
    </div>
    )
}

export default Error