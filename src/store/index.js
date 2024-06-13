import { configureStore } from '@reduxjs/toolkit';
import reducers from './reducers';
import { useDispatch as useAppDispatch, useSelector as useAppSelector } from 'react-redux';


const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({serializableCheck: false})
});

const { dispatch } = store;

const useDispatch = () => useAppDispatch();
const useSelector = useAppSelector;

export { store, dispatch, useSelector, useDispatch };
