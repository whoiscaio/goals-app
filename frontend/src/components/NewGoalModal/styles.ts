import styled from 'styled-components';

export const Overlay = styled.div`
  background: #00000022;

  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  
  cursor: pointer;
`;

export const NewGoalModalContainer = styled.div`
  width: min(800px, 100%);

  background: #ffffff;
  border-radius: ${({ theme }) => theme.measures.borderRadius};

  padding: 2rem;
  margin: 0 4rem;

  cursor: initial;

  h3 {
    font-size: 2.6rem;
  }

  input {
    border: 1px solid #838383;
    border-radius: ${({ theme }) => theme.measures.borderRadius};

    font-size: 1.6rem;

    width: 100%;

    margin: 2rem 0;
    padding: .8rem 1.2rem;
  }

  .button-wrapper {
    display: flex;
    justify-content: center;
  }

  button {
    background: #121212;
    border-radius: ${({ theme }) => theme.measures.borderRadius};
    color: #ffffff;

    font-size: 1.6rem;

    padding: .6rem 1rem;

    cursor: pointer;
    transition: background .12s ease-in;

    &:hover {
      background: #282828;
    }
  }
`;