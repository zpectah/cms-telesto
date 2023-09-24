import { useDispatch, useSelector } from 'react-redux';
import { selectAuthState, setAuthState } from '../store';

export const useAuthSlice = () => {
  const auth = useSelector(selectAuthState);
  const dispatch = useDispatch();

  return {
    auth,
    setAuth: (value: boolean) => dispatch(setAuthState(value)),
  };
};
