import { createContext, useContext } from 'react';
import { CONFIG } from '../config';
import { ColorModeType } from '../types';

export interface ColorModeContextProps {
  theme: ColorModeType;
  toggle: () => void;
}

const defaultValue: ColorModeContextProps = {
  theme: CONFIG.CONTEXT.DEFAULT.THEME as ColorModeType,
  toggle: () => null,
};

export const ColorModeContext = createContext(defaultValue);
export const ColorModeContextProvider = ColorModeContext.Provider;
export const ColorModeContextConsumer = ColorModeContext.Consumer;
export const useColorModeContext = (): ColorModeContextProps =>
  useContext(ColorModeContext);

export default ColorModeContext;
