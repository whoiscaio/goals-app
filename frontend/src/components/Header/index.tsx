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
  currentTheme: string;
  themeSwitcher: () => void;
};

function Header({ currentTheme, themeSwitcher }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

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
        <h2>Goals</h2>
      </div>
      <div className="options-wrapper">
        <nav>
          {!user ? (
            <ul>
              <li>
                <NavLink to="/login">
                  <LogIn size={24} />
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink to="/signup">
                  <User size={24} />
                  Signup
                </NavLink>
              </li>
            </ul>
          ) : (
            <button id="logout-button" onClick={handleLogoutClick}>
              Logout
            </button>
          )}
        </nav>
        <button id="theme-switcher-button" onClick={themeSwitcher}>
          {currentTheme === 'dark' ? (
            <Sun color="#f6f8ff" size={24} />
          ) : (
            <Moon size={24} />
          )}
        </button>
        <button
          id="mobile-menu-button"
          type="button"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu
            size={24}
            color={currentTheme === 'light' ? '#121212' : '#f6f8ff'}
          />
        </button>
      </div>
      {isMobileMenuOpen && (
        <MobileMenu closeMenu={() => setIsMobileMenuOpen(false)} />
      )}
    </HeaderContainer>
  );
}

export default Header;
