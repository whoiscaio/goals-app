import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../store/store';
import { DashboardContainer } from './styles';

function Dashboard() {
  const { user } = useSelector((state: RootState) => state.auth);

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  return (
    <DashboardContainer>
      <h1>Dashboard</h1>
      <div className="goals"></div>
    </DashboardContainer>
  );
}

export default Dashboard;
