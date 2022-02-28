import { ChangeEvent, useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { useDispatch } from 'react-redux';
import { NewGoalModalContainer, Overlay } from './styles';

type NewGoalModalType = {
  closeModal: () => void;
};

function NewGoalModal({ closeModal }: NewGoalModalType) {
  const [goalText, setGoalText] = useState<string>('');

  const overlayRef = useRef<HTMLDivElement>(null);

  function handleOverlayClick(e: MouseEvent) {
    // eslint-disable-line
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
