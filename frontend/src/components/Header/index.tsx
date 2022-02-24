import { Link, NavLink } from 'react-router-dom';
import { HeaderContainer } from './styled';

function Header() {
  return (
    <HeaderContainer>
      <div className="title">
        <h2>
          <Link to="/">Goals</Link>
        </h2>
      </div>
      <nav>
        <ul>
          <li><NavLink to="/">Dashboard</NavLink></li>
          <li><NavLink to="/login">Login</NavLink></li>
          <li><NavLink to="/signup">Signup</NavLink></li>
        </ul>
      </nav>
    </HeaderContainer>
  );
}

export default Header;
