import { Delete, Edit } from 'lucide-react';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteGoal, GoalType, updateGoal } from '../../store/features/goals/goalSlice';
import { RootState } from '../../store/store';
import NewGoalModal from '../NewGoalModal';
import { GoalContainer } from './styles';

function Goal({ goal }: { goal: GoalType }) {
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState<boolean>(false);
  const [goalChecked, isGoalChecked] = useState<boolean>(goal.completed);

  const firstRender = useRef<boolean>(true);

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

  function handleGoalChange(e: ChangeEvent<HTMLInputElement>) {
    isGoalChecked(e.target.checked);
  }

  useEffect(() => {
    if(firstRender.current) {
      firstRender.current = false;
      return;
    }

    if(!user || !goal._id) {
      return;
    }

    const editInfo = {
      newGoal: {
        text: goal.text,
        completed: goalChecked,
      },
      goalId: goal._id,
      token: user.token,
    }

    dispatch(updateGoal(editInfo));
  }, [goalChecked, dispatch, goal._id, goal.text, user]);

  return (
    <GoalContainer className={goalChecked ? 'completed' : undefined}>
      <label>
        <input type="checkbox" id="goal-checkbox" onChange={handleGoalChange} checked={goalChecked}/>
        <span id="custom-checkbox" />
        <span>{goal.text}</span>
      </label>
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
