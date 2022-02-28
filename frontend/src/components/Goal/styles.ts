import styled from 'styled-components';

export const GoalContainer = styled.div`
  background: #ffffff;
  border-radius: ${({ theme }) => theme.measures.borderRadius};
  box-shadow: ${({ theme }) => theme.measures.boxShadow};
  color: #121212;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 2rem;
  padding: 2.4rem 3.2rem;

  span {
    font-size: 2.2rem;
  }

  &.completed {
    color: #676767;

    span {
      text-decoration: line-through;
    }
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
    
    svg {
      transition: stroke .12s ease-in;

      &:hover {
        stroke: #cc0000;
      }
    }
  }
`;