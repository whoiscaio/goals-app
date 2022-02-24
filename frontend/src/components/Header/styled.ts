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

    display: inline-block;

    transition: transform, .24s ease-in-out;

    &:hover {
      transform: scale(1.05);
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

    &:last-child {
      margin-right: 0;
    }
  }
`;