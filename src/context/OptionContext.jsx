import { createContext, useContext } from 'react';

export const OptionContext = createContext('a');

export function useOption() {
  return useContext(OptionContext);
}
