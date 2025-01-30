import './Header.css';

function Header({isLoggedIn}){
    const listaMenu = ['Home', 'Chi siamo', 'Consulenza', 'Contatti']
    if(isLoggedIn){
    return(
        <header>
            <h1>
                Ciao sono un header
            </h1>
            <ul>
                {listaMenu.map(function(elemento ,index){
                    return <li> <a key={index} href="{elemento}"> {elemento} </a> </li>
                })}
            </ul>
        </header>
    )
}else{
    return <p>Perfavore, effettua il login</p>

}
};

export default Header //esporto il componente