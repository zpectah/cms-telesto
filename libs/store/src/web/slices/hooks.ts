import { useDispatch, useSelector } from 'react-redux';
import {
  webCounterIncrement,
  webCounterDecrement,
  webCounterIncrementByAmount,
} from './counter';
import { WebStateProps, WebDispatchProps } from '../types';

export const useWebCounterSlice = () => {
  const counter = useSelector((state: WebStateProps) => state.counter);
  const dispatch: WebDispatchProps = useDispatch();

  return {
    counter,
    increment: () => dispatch(webCounterIncrement()),
    decrement: () => dispatch(webCounterDecrement()),
    incrementByAmount: (value: number) =>
      dispatch(webCounterIncrementByAmount(value)),
  };
};
