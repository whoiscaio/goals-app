import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Goal from '../components/Goal';
import NewGoalModal from '../components/NewGoalModal';
import { getGoals } from '../store/features/goals/goalSlice';
import { RootState } from '../store/store';
import { DashboardContainer } from './styles';

function Dashboard() {
  const [ isCreateModalOpen, setIsCreateModalOpen ] = useState<boolean>(false);

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

  return (
    <DashboardContainer>
      <h1>Dashboard</h1>
      <div className="options-container">
        <div className="filters"></div>
        <button onClick={handleCreateNewGoal}>Create new goal</button>
      </div>
      <div className="goals">
        { goals && goals.map((goal) => <Goal key={goal._id} goal={goal} />) }
      </div>
      {isCreateModalOpen && <NewGoalModal closeModal={closeCreateModal} />}
    </DashboardContainer>
  );
}

export default Dashboard;
