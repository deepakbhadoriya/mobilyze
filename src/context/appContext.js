import { createContext, useContext } from 'react';

export const AppContext = createContext("");

const appContext = () => useContext(AppContext)

export default appContext;