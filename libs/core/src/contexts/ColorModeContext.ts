import { createContext, useContext } from 'react';
// import { ADMIN_CFG } from '../config';

export type ColorModeType = 'light' | 'dark';

export interface ColorModeContextProps {
  theme: ColorModeType;
  toggle: () => void;
}

const defaultValue: ColorModeContextProps = {
  // theme: ADMIN_CFG.CONTEXT.DEFAULT.THEME as ColorModeType,
  theme: 'light', // TODO
  toggle: () => null,
};

export const ColorModeContext = createContext(defaultValue);
export const ColorModeContextProvider = ColorModeContext.Provider;
export const ColorModeContextConsumer = ColorModeContext.Consumer;
export const useColorModeContext = (): ColorModeContextProps =>
  useContext(ColorModeContext);

export default ColorModeContext;
