import './Header.css';
import { Link } from 'react-router-dom'

function Header({isLoggedIn}){
    const listaMenu = ['Home', 'About', 'Consulenza', 'Contatti']
    if(isLoggedIn){
    return(
        <header>
            <h1>
                Ciao sono un header
            </h1>
            <ul>
            {listaMenu.map((lista)=>(
                <Link key={lista} to ={'/lista/'+lista}>
                {lista}
                </Link>
            ))}
                
            </ul>
        </header>
    )
}else{
    return <p>Perfavore, effettua il login</p>

}
};

export default Header //esporto il componente