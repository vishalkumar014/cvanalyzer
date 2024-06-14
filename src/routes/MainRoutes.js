import Dashboard from '../pages/dashboard/Main';
import MainLayout from '../layout/MainLayout';
import AuthGuard from '../gaurd/AuthGuard';

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: (
    <AuthGuard>
        <MainLayout/>
    </AuthGuard>
  ),
  children: [
    {
      path: '/',
      element: <Dashboard />
    },
  ]
};

export default MainRoutes;
