import { LogIn, User } from 'lucide-react';
import { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logout, reset } from '../../store/features/auth/authSlice';
import { reset as goalReset } from '../../store/features/goals/goalSlice';
import { RootState } from '../../store/store';
import { MobileMenuContainer, Overlay } from './styles';

type MobileMenuProps = {
  closeMenu: () => void;
};

function MobileMenu({ closeMenu }: MobileMenuProps) {
  const mobileMenuPortal = document.getElementById('mobile-menu-portal');

  const { user } = useSelector((state: RootState) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [handleClick]);

  const overlayRef = useRef<HTMLDivElement>(null);

  if (!mobileMenuPortal) return null;

  function handleLogout() {
    dispatch(reset());
    dispatch(goalReset());
    dispatch(logout());
  }

  function handleClick(e: MouseEvent) { // eslint-disable-line
    if (e.target !== overlayRef.current) return;

    closeMenu();
  }

  return ReactDOM.createPortal(
    <Overlay ref={overlayRef}>
      <MobileMenuContainer>
        <nav>
          <ul>
            {!user ? (
              <>
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
              </>
            ) : (
              <li>
                <button id="menu-logout-button" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            )}
          </ul>
        </nav>
      </MobileMenuContainer>
    </Overlay>,
    mobileMenuPortal
  );
}
export default MobileMenu;
