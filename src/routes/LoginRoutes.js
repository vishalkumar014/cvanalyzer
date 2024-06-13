import GuestGuard from '../gaurd/GuestGuard';
import CommonLayout from '../layout/CommonLayout';
import AuthLogin from '../pages/authentication/Login';

const LoginRoutes = {
  path: '/',
  children: [
    {
      path: '/',
      element: (
        <GuestGuard>
          <CommonLayout />
        </GuestGuard>
      ),
      children: [
        {
          path: 'login',
          element: <AuthLogin />
        }
      ]
    }
  ]
};
export default LoginRoutes;