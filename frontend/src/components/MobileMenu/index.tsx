import { LogIn, User } from 'lucide-react';
import { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';
import { MobileMenuContainer, Overlay } from './styles';

type MobileMenuProps = {
  closeMenu: () => void;
};

function MobileMenu({ closeMenu }: MobileMenuProps) {
  const mobileMenuPortal = document.getElementById('mobile-menu-portal');

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    }
  }, []);

  const overlayRef = useRef<HTMLDivElement>(null);

  if (!mobileMenuPortal) return null;

  function handleClick(e: MouseEvent) {
    if (e.target !== overlayRef.current) return;

    closeMenu();
  }

  return ReactDOM.createPortal(
    <Overlay ref={overlayRef}>
      <MobileMenuContainer>
        <nav>
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
        </nav>
      </MobileMenuContainer>
    </Overlay>,
    mobileMenuPortal
  );
}
export default MobileMenu;
