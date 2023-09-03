import { useDispatch, useSelector } from 'react-redux';
import {
  counterIncrement,
  counterDecrement,
  counterIncrementByAmount,
} from './counter';
import { AdminStateProps, AdminDispatchProps } from '../types';

export const useCounterSlice = () => {
  const counter = useSelector((state: AdminStateProps) => state.counter);
  const dispatch: AdminDispatchProps = useDispatch();

  return {
    counter,
    increment: () => dispatch(counterIncrement()),
    decrement: () => dispatch(counterDecrement()),
    incrementByAmount: (value: number) =>
      dispatch(counterIncrementByAmount(value)),
  };
};
