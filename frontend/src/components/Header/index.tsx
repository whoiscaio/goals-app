import { Link, NavLink } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';

import { HeaderContainer } from './styled';

type HeaderProps = {
  currentTheme: string,
  themeSwitcher: () => void,
}

function Header({ currentTheme, themeSwitcher }: HeaderProps) {
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
        <button onClick={themeSwitcher}>
          {
            currentTheme === 'dark'
            ? <Sun color='#f6f8ff' size={24} />
            : <Moon size={24} />
          }
        </button>
      </nav>
    </HeaderContainer>
  );
}

export default Header;
