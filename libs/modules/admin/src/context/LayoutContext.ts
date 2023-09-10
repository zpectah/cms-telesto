import { createContext, useContext } from 'react';
import { CONFIG } from '../config';

export interface LayoutContextProps {
  open: boolean;
  toggle: () => void;
}

const defaultContext: LayoutContextProps = {
  open: CONFIG.CONTEXT.DEFAULT.LAYOUT,
  toggle: () => null,
};

const LayoutContext = createContext<LayoutContextProps>(defaultContext);
export const LayoutContextProvider = LayoutContext.Provider;
export const LayoutContextConsumer = LayoutContext.Consumer;
export const useLayoutContext = (): LayoutContextProps =>
  useContext(LayoutContext);

export default LayoutContext;
