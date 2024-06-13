import PropTypes from 'prop-types';
import { createContext, useEffect, useReducer } from 'react';
import { LOGIN, LOGOUT } from '../store/reducers/actions';
import authReducer from '../store/reducers/auth';
import axios from '../utils/axios';


// constant
const initialState = {
  isLoggedIn: false,
  isInitialized: false,
  user: null
};

const verifyToken = (serviceToken) => {
  if (!serviceToken) {
    return false;
  } else {
    return true
  }
};

const setSession = (serviceToken) => {
  if (serviceToken) {
    localStorage.setItem('serviceToken', serviceToken);
    axios.defaults.headers.common.Authorization = `Bearer ${serviceToken}`;
  } else {
    localStorage.clear()
    delete axios.defaults.headers.common.Authorization;
  }
};

// ==============================|| JWT CONTEXT & PROVIDER ||============================== //

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    init();
  }, []);


  const init = async () => {
    try {
      const serviceToken = window.localStorage.getItem('serviceToken');
      if (serviceToken && verifyToken(serviceToken)) {
        setSession(serviceToken);
        const { user } = {name:"vishal"};
        dispatch({
          type: LOGIN,
          payload: {
            isLoggedIn: true,
            user
          }
        });
      } else {
        dispatch({
          type: LOGOUT
        });
      }
    } catch (err) {
      dispatch({
        type: LOGOUT
      });
    }
  };

  const login = async (data) => {
    const {access_token,email,name} = data
    let user = {email,name}
    setSession(access_token)
    dispatch({
      type: LOGIN,
      payload: {
        isLoggedIn: true,
        user
      }
    });
  };

  const logout = () => {
    setSession(null);
    dispatch({ type: LOGOUT });
  };

  return <AuthContext.Provider value={{ ...state, login, logout }}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node
};

export default AuthContext;
