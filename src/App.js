// project import
import Routes from './routes';
import { AuthProvider } from './contexts/AuthContext';
import { BrowserRouter as Router} from 'react-router-dom';
// ==============================|| APP - THEME, ROUTER, LOCAL  ||============================== //

const App = () => (
  <AuthProvider>
    <Router>
      <Routes />
    </Router>
  </AuthProvider>
);

export default App;
