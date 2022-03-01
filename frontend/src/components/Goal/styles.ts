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

  label {
    display: flex;
    align-items: center;
  }

  #goal-checkbox {
    width: 0;
    height: 0;
    visibility: none;

    & ~ #custom-checkbox {
      background-color: #ffffff;
      border: 1px solid #838383;
      border-radius: 0.4rem;

      height: 2.5rem;
      width: 2.5rem;

      position: relative;

      margin-right: 2rem;

      cursor: pointer;

      &:hover {
        background: #e1e7ff;
      }

      &::after {
        content: '';
        position: absolute;
        display: none;

        left: .8rem;
        top: .4rem;
        width: 4px;
        height: 10px;
        border: solid #ffffff;
        border-width: 0 4px 4px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
      }
    }

    &:checked ~ #custom-checkbox {
      background: #33759d;

      &::after {
        display: block;
      }
    }
  }

  span {
    font-size: 2.2rem;
  }

  &.completed {
    color: #676767;

    span {
      text-decoration: line-through;
    }
  }

  .actions {
    display: flex;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;

    margin-left: 2rem;

    svg {
      transition: stroke 0.12s ease-in;
    }

    &#delete-button:hover {
      svg {
        stroke: #cc0000;
      }
    }

    &#edit-button:hover {
      svg {
        stroke: #1478f3;
      }
    }
  }
`;
