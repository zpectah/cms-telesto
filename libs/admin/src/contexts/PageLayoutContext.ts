import { createContext, useContext } from 'react';

export interface PageLayoutContextProps {
  sidebarOpen: boolean;
  sidebarToggle: () => void;
}

const defaultContext: PageLayoutContextProps = {
  sidebarOpen: false,
  sidebarToggle: () => null,
};

const PageLayoutContext = createContext<PageLayoutContextProps>(defaultContext);
export const PageLayoutContextProvider = PageLayoutContext.Provider;
export const PageLayoutContextConsumer = PageLayoutContext.Consumer;
export const usePageLayoutContext = (): PageLayoutContextProps =>
  useContext(PageLayoutContext);

export default PageLayoutContext;
