import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid ${({ theme }) => theme.colors.text};

  width: min(1200px, 80vw);
  
  margin: 0 auto;

  h2 {
    font-size: 3rem;

    padding: 2.6rem 0;
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
    }
  }

  nav {
    display: flex;
    align-items: center;

    button {
      border-radius: ${({ theme }) => theme.measures.borderRadius};

      display: flex;
      justify-content: center;
      align-items: center;
      
      padding: .8rem;
      
      cursor: pointer;
      transition: background-color .12s ease-in;

      &:hover {
        background-color: ${({ theme }) => theme.colors.effects.themeSwitcherBackground};
      }
    }
  }
`;