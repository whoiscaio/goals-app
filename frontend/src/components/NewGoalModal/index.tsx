import { ChangeEvent, useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createNewGoal } from '../../store/features/goals/goalSlice';
import { RootState } from '../../store/store';
import { NewGoalModalContainer, Overlay } from './styles';

type NewGoalModalType = {
  closeModal: () => void;
};

function NewGoalModal({ closeModal }: NewGoalModalType) {
  const { user } = useSelector((state: RootState) => state.auth);

  const [goalText, setGoalText] = useState<string>('');

  const overlayRef = useRef<HTMLDivElement>(null);

  const dispatch = useDispatch();

  function handleOverlayClick(e: MouseEvent) { // eslint-disable-line
    if (e.target === overlayRef.current) return closeModal();
  }

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

  function handleGoalTextChange(e: ChangeEvent<HTMLInputElement>) {
    setGoalText(e.target.value);
  }

  return ReactDOM.createPortal(
    <Overlay ref={overlayRef}>
      <NewGoalModalContainer>
        <h3>Set a new goal</h3>
        <input
          type="text"
          placeholder="Type your goal here..."
          value={goalText}
          onChange={handleGoalTextChange}
        />
        <div className="button-wrapper">
          <button type="button" onClick={createGoal}>
            Create goal
          </button>
        </div>
      </NewGoalModalContainer>
    </Overlay>,
    modalPortal
  );
}
export default NewGoalModal;
