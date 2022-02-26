import { Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import Signup from '../pages/Signup';

type RouterTypes = {
  currentTheme: string,
}

function Router({ currentTheme }: RouterTypes) {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Login currentTheme={currentTheme} />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default Router;
