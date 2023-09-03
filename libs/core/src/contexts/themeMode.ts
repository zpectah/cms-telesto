import { createContext } from 'react';

const defaultValue = {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleColorMode: (): void => {},
};

export const ColorModeContext = createContext(defaultValue);
export const ColorModeContextProvider = ColorModeContext.Provider;
export const ColorModeContextConsumer = ColorModeContext.Consumer;

export default ColorModeContext;
