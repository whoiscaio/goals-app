import { ChangeEvent, useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  createNewGoal,
  updateGoal as handleUpdateGoal,
} from '../../store/features/goals/goalSlice';
import { RootState } from '../../store/store';
import { NewGoalModalContainer, Overlay } from './styles';

type NewGoalModalType = {
  closeModal: () => void;
  type?: string;
  goalId?: string;
  isGoalCompleted?: boolean;
};

function NewGoalModal({
  closeModal,
  type,
  goalId,
  isGoalCompleted,
}: NewGoalModalType) {
  const { user } = useSelector((state: RootState) => state.auth);

  const [goalText, setGoalText] = useState<string>('');

  const overlayRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const dispatch = useDispatch();

  function handleOverlayClick(e: MouseEvent) { //eslint-disable-line
    if (e.target === overlayRef.current) return closeModal();
  }

  function handleKeydown(e: KeyboardEvent) {
    if (!buttonRef.current) return;

    if (e.key === 'Enter') {
      buttonRef.current.click();
    }
  }

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }

    document.addEventListener('keydown', handleKeydown);

    return () => {
      document.addEventListener('keydown', handleKeydown);
    };
  });

  useEffect(() => {
    document.addEventListener('click', handleOverlayClick);

    return () => {
      document.removeEventListener('click', handleOverlayClick);
    };
  }, [handleOverlayClick]);

  const modalPortal = document.getElementById('modal-portal');
  if (!modalPortal) return null;

  function createGoal() {
    if (!user) return;

    const newGoal = {
      goal: {
        text: goalText,
        completed: false,
      },
      token: user.token,
    };

    dispatch(createNewGoal(newGoal));
    closeModal();
  }

  function updateGoal() {
    if (!user || !goalId) return;

    const updatedGoal = {
      newGoal: {
        text: goalText,
        completed: isGoalCompleted || false,
      },
      goalId,
      token: user.token,
    };

    dispatch(handleUpdateGoal(updatedGoal));
    closeModal();
  }

  function handleGoalTextChange(e: ChangeEvent<HTMLInputElement>) {
    setGoalText(e.target.value);
  }

  return ReactDOM.createPortal(
    <Overlay ref={overlayRef}>
      <NewGoalModalContainer>
        <h3>Set a new goal</h3>
        <input
          type="text"
          ref={inputRef}
          placeholder={
            type !== 'update'
              ? 'Type your goal here...'
              : 'Type your updated goal here...'
          }
          value={goalText}
          onChange={handleGoalTextChange}
        />
        <div className="button-wrapper">
          <button
            type="button"
            ref={buttonRef}
            onClick={type !== 'update' ? createGoal : updateGoal}
          >
            {type !== 'update' ? 'Create goal' : 'Update goal'}
          </button>
        </div>
      </NewGoalModalContainer>
    </Overlay>,
    modalPortal
  );
}
export default NewGoalModal;
