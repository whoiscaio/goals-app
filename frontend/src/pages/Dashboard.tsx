import { Search } from 'lucide-react';
import { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Goal from '../components/Goal';
import NewGoalModal from '../components/NewGoalModal';
import { getGoals, GoalType } from '../store/features/goals/goalSlice';
import { RootState } from '../store/store';
import { DashboardContainer } from './styles';

function Dashboard() {
  const [filterText, setFilterText] = useState<string>('');
  const [isCreateModalOpen, setIsCreateModalOpen] = useState<boolean>(false);

  const { user } = useSelector((state: RootState) => state.auth);
  const { goals } = useSelector((state: RootState) => state.goal);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }

    dispatch(getGoals(user.token));
  }, [user, navigate, dispatch]);

  function handleCreateNewGoal() {
    setIsCreateModalOpen(true);
  }

  function closeCreateModal() {
    setIsCreateModalOpen(false);
  }

  function handleFilterTextChange(e: ChangeEvent<HTMLInputElement>) {
    setFilterText(e.target.value);
  }

  function filterGoal(goal: GoalType) {
    if (filterText === '') return true;

    return goal.text.toLowerCase().includes(filterText.toLowerCase());
  }

  return (
    <DashboardContainer>
      <h1>Dashboard</h1>
      <div className="options-container">
        <div className="filters">
          <Search size={24} color="#838383" />
          <input
            type="text"
            placeholder="Filter by text..."
            value={filterText}
            onChange={handleFilterTextChange}
          />
        </div>
        <button onClick={handleCreateNewGoal}>Create new goal</button>
      </div>
      <div className="goals">
        {goals &&
          goals.map(
            (goal) => filterGoal(goal) && <Goal key={goal._id} goal={goal} />
          )}
      </div>
      {isCreateModalOpen && <NewGoalModal closeModal={closeCreateModal} />}
    </DashboardContainer>
  );
}

export default Dashboard;
