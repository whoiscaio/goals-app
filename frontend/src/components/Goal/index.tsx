import { Delete, Edit } from 'lucide-react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteGoal, GoalType } from '../../store/features/goals/goalSlice';
import { RootState } from '../../store/store';
import NewGoalModal from '../NewGoalModal';
import { GoalContainer } from './styles';

function Goal({ goal }: { goal: GoalType }) {
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState<boolean>(false);

  const { user } = useSelector((state: RootState) => state.auth);
  
  const dispatch = useDispatch();

  function handleDeleteGoal(goalId: string | undefined) {
    if(!goalId || !user) return null;

    dispatch(deleteGoal({goalId, token: user.token}));
  }

  function handleEditGoal() {
    setIsUpdateModalOpen(true);
  }

  function closeModal() {
    setIsUpdateModalOpen(false);
  }

  return (
    <GoalContainer className={goal.completed ? 'completed' : undefined}>
      <span>{goal.text}</span>
      <div className="actions">
        <button id="edit-button" type="button" onClick={() => handleEditGoal()}>
          <Edit size={24} color='#121212' />
        </button>
        <button id="delete-button" type="button" onClick={() => handleDeleteGoal(goal._id)}>
          <Delete
            size={24}
            color='#121212'
          />
        </button>
      </div>
      { isUpdateModalOpen && <NewGoalModal closeModal={closeModal} type="update" goalId={goal._id} /> }
    </GoalContainer>
  );
}
export default Goal;
