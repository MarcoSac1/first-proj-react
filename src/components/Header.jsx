import './Header.css';
import { Link } from 'react-router-dom';

function Header({ isLoggedIn }) {
  const listaMenu = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Consulenza', path: '/consulenza' },
    { name: 'Contatti', path: '/contatti' },
  ];

  console.log("isLoggedIn:", isLoggedIn);



  return (
    <header>
      <h1>Navbar Dinamica</h1>
      <ul>
        {listaMenu.map((item) => (
          <li key={item.name}>
            <Link to={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </header>
  );
}

export default Header;
