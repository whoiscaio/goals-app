import { Delete } from 'lucide-react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteGoal, GoalType } from '../../store/features/goals/goalSlice';
import { RootState } from '../../store/store';
import { GoalContainer } from './styles';

function Goal({ goal }: { goal: GoalType }) {
  const { user } = useSelector((state: RootState) => state.auth);
  
  const dispatch = useDispatch();

  function handleDeleteGoal(goalId: string | undefined) {
    if(!goalId || !user) return null;

    console.log('delete');

    dispatch(deleteGoal({goalId, token: user.token}));
  }

  return (
    <GoalContainer className={goal.completed ? 'completed' : undefined}>
      <span>{goal.text}</span>
      <div className="actions">
        <button id="delete-button" type="button" onClick={() => handleDeleteGoal(goal._id)}>
          <Delete
            size={24}
            color='#121212'
          />
        </button>
      </div>
    </GoalContainer>
  );
}
export default Goal;
