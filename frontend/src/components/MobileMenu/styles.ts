import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
  from {
    transform: translateY(-100%);
  }

  to {
    transform: initial;
  }
`;

export const Overlay = styled.div`
  background: #00000088;

  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  cursor: pointer;
`;

export const MobileMenuContainer = styled.div`
  animation: ${slideIn} .24s ease-in;

  background: ${({ theme }) => theme.colors.background};

  a {
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 1.8rem;

    padding: 1.6rem;

    color: ${({ theme }) => theme.colors.text};

    svg {
      margin-right: 2.4rem;
    }
  }

  #menu-logout-button {
    color: ${({ theme }) => theme.colors.text};
    font-size: 1.8rem;

    width: 100%;

    padding: 1.6rem;

    cursor: pointer;
  }

  padding: .8rem;

  cursor: initial;
`;