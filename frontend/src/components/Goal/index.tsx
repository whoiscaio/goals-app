import { Delete } from 'lucide-react';
import { useState } from 'react';
import { GoalType } from '../../store/features/goals/goalSlice';
import { GoalContainer } from './styles';

function Goal({ goal }: { goal: GoalType }) {
  const [deleteButtonColor, setDeleteButtonColor] = useState<string>('#121212');

  function handleDeleteGoal() {}

  function toggleDeleteButtonColor() {
    setDeleteButtonColor((prevState) =>
      prevState === '#121212' ? '#cc0000' : '#121212'
    );
  }

  return (
    <GoalContainer className={goal.completed ? 'completed' : undefined}>
      <span>{goal.text}</span>
      <div className="actions">
        <button id="delete-button" type="button" onClick={handleDeleteGoal}>
          <Delete
            size={24}
            color={deleteButtonColor}
            onMouseEnter={toggleDeleteButtonColor}
            onMouseLeave={toggleDeleteButtonColor}
          />
        </button>
      </div>
    </GoalContainer>
  );
}
export default Goal;
