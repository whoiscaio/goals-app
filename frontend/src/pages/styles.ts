import styled from 'styled-components';

export const LoginSignupPageContainer = styled.section`
  width: min(600px, 100%);

  h1, span {
    color: ${({ theme }) => theme.colors.text};
  }

  h1 {
    text-align: center;
    font-size: 4rem;

    margin-bottom: 3rem;

    pointer-events: none;
  }

  label {
    display: block;
    
    margin-bottom: 2rem;
    
    &:last-of-type {
      margin-bottom: 3rem;
    }
  }

  span {
    font-size: 1.8rem;
  }

  input {
    border: 2px solid #ffffff;
    border-radius: ${({ theme }) => theme.measures.borderRadius};
    box-shadow: ${({ theme }) => theme.measures.boxShadow};

    width: 100%;

    margin-top: .6rem;
    padding: 1rem;

    outline: 0;

    &:focus {
      border: 2px solid #141414;
    }

    &.error {
      border: 2px solid ${({ theme }) => theme.colors.error};
    }
  }

  .button-wrapper {
    display: flex;
    justify-content: flex-end;
  }

  button {
    background: ${({ theme }) => theme.colors.background};
    border-radius: ${({ theme }) => theme.measures.borderRadius};

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 2.4rem;
    font-weight: 800;

    padding: .8rem 1.6rem;

    cursor: pointer;

    svg {
      transition: transform 250ms;
    }

    &:hover {
      svg {
        transform: translateX(5px);
      }
    }
  }

  div.error {
    color: ${({ theme }) => theme.colors.error};
    font-size: 1.6rem;

    margin-top: .4rem;
  }
`;

export const PageWrapper = styled.main`
  width: min(1200px, 80vw);

  display: flex;
  justify-content: center;
  
  margin: 0 auto;
  padding: 4rem 0;
`;