import { createContext } from 'react';

export const contextValue = {
  currentSign: '',
  score: 0,
};
const AppContext = createContext(contextValue);
export default AppContext;
