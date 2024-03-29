import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid ${({ theme }) => theme.colors.text};

  width: min(1200px, 80vw);

  margin: 0 auto;

  .options-wrapper {
    display: flex;
  }

  h2 {
    color: ${({ theme }) => theme.colors.text};
    font-size: 3rem;

    padding: 2.6rem 0;

    pointer-events: none;
  }

  a {
    color: ${({ theme }) => theme.colors.text};

    &:hover {
      text-decoration: underline;
    }
  }

  ul {
    display: flex;
  }

  li {
    margin-right: 5rem;

    a {
      font-size: 1.6rem;

      display: flex;
      align-items: center;
    }

    svg {
      margin-right: 0.8rem;
    }
  }

  nav {
    display: flex;
    align-items: center;

    @media (max-width: 650px) {
      display: none;
    }
  }

  #theme-switcher-button, #mobile-menu-button {
    border-radius: ${({ theme }) => theme.measures.borderRadius};

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0.8rem;

    cursor: pointer;
    transition: background-color 0.12s ease-in;

    &:hover {
      background-color: ${({ theme }) =>
        theme.colors.effects.themeSwitcherBackground};
    }
  }

  #logout-button {
    color: ${({ theme }) => theme.colors.text};
    font-size: 1.6rem;
    font-weight: 800;

    margin-right: 2rem;
  }

  #mobile-menu-button {
    display: none;

    margin-left: .8rem;

    cursor: pointer;

    @media (max-width: 650px) {
      display: flex;
    }
  }
`;
