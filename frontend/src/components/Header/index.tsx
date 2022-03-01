import { NavLink } from 'react-router-dom';
import { Sun, Moon, LogIn, User, Menu } from 'lucide-react';

import { HeaderContainer } from './styled';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { reset, logout } from '../../store/features/auth/authSlice';
import { reset as goalReset } from '../../store/features/goals/goalSlice';
import { useState } from 'react';
import MobileMenu from '../MobileMenu';

type HeaderProps = {
  currentTheme: string,
  themeSwitcher: () => void,
}

function Header({ currentTheme, themeSwitcher }: HeaderProps) {
  const [ isMobileMenuOpen, setIsMobileMenuOpen ] = useState<boolean>(false);

  const dispatch = useDispatch();

  const { user } = useSelector((state: RootState) => state.auth);

  function handleLogoutClick() {
    dispatch(reset());
    dispatch(goalReset());
    dispatch(logout());
  }

  return (
    <HeaderContainer>
      <div className="title">
        <h2>
          Goals
        </h2>
      </div>
      <nav>
        {
          !user 
          ? (
            <ul>
              <li><NavLink to="/login">
                <LogIn size={24} />
                Login  
              </NavLink></li>
              <li><NavLink to="/signup">
                <User size={24} />
                Signup  
              </NavLink></li>
            </ul>
          )
          : (
            <button id="logout-button" onClick={handleLogoutClick}>
              Logout
            </button>
          )
        }
        <button onClick={themeSwitcher}>
          {
            currentTheme === 'dark'
            ? <Sun color='#f6f8ff' size={24} />
            : <Moon size={24} />
          }
        </button>
      </nav>
      <button id="mobile-menu-button" type="button" onClick={() => setIsMobileMenuOpen(true)}>
        <Menu size={24} />
      </button>
      { isMobileMenuOpen && <MobileMenu closeMenu={() => setIsMobileMenuOpen(false)} /> }
    </HeaderContainer>
  );
}

export default Header;
