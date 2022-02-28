import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getGoals } from '../store/features/goals/goalSlice';
import { RootState } from '../store/store';
import { DashboardContainer } from './styles';

function Dashboard() {
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
    console.log('create new goal');
  }

  return (
    <DashboardContainer>
      <h1>Dashboard</h1>
      <div className="options-container">
        <div className="filters"></div>
        <button onClick={handleCreateNewGoal}>Create new goal</button>
      </div>
      <div className="goals"></div>
    </DashboardContainer>
  );
}

export default Dashboard;
