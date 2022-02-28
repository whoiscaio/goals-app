import styled from 'styled-components';

export const LoginSignupPageContainer = styled.section`
  width: min(600px, 100%);

  h1 {
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

  input {
    border: 2px solid #ffffff;
    border-radius: ${({ theme }) => theme.measures.borderRadius};
    box-shadow: ${({ theme }) => theme.measures.boxShadow};

    font-size: 1.6rem;
    width: 100%;

    margin-top: 0.6rem;
    padding: 1rem;

    outline: 0;

    &:focus {
      border: 2px solid #141414;
    }

    &.error {
      border: 2px solid ${({ theme }) => theme.colors.error};
    }

    &::placeholder {
      font-weight: 800;
    }
  }

  .button-wrapper {
    display: flex;
    align-items: center;

    button {
      margin-left: auto;
    }

    span {
      color: ${({ theme }) => theme.colors.text};
      font-size: 1.4rem;
    }

    a {
      margin-left: 0.6rem;
    }
  }

  button {
    background: ${({ theme }) => theme.colors.background};
    border-radius: ${({ theme }) => theme.measures.borderRadius};

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 2.4rem;
    font-weight: 800;

    padding: 0.8rem 1.6rem;

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

    margin-top: 0.4rem;
  }
`;

export const DashboardContainer = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: ${({ theme }) => theme.colors.text};
    font-size: 3.8rem;

    margin-bottom: 2rem;
  }

  .options-container {
    width: min(100%, 1000px);

    display: flex;

    .filters {
      flex: 4;

      background: #fff;
      border-radius: ${({ theme }) => theme.measures.borderRadius};
      box-shadow: ${({ theme }) => theme.measures.boxShadow};
      color: ${({ theme }) => theme.colors.background};

      margin-right: 1rem;
    }

    button {
      flex: 1;

      background: ${({ theme }) => theme.colors.text};
      border-radius: ${({ theme }) => theme.measures.borderRadius};
      box-shadow: ${({ theme }) => theme.measures.boxShadow};
      color: ${({ theme }) => theme.colors.background};

      font-size: 1.8rem;

      padding: 1.2rem;

      cursor: pointer;

      &:hover {
        transition: background .12s ease-in;
        background: ${({ theme }) => theme.colors.effects.invertedButtonBackground};
      }
    }
  }
`;

export const PageWrapper = styled.main`
  width: min(1200px, 80vw);

  display: flex;
  justify-content: center;

  margin: 0 auto;
  padding: 4rem 0;
`;
