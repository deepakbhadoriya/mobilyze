import React from 'react'
import MapContainer from './components/MapContainer'
import { AppContext } from "./context/appContext";
import useAppContext from './context/useAppState';
import Sidebar from './components/Sidebar';

const App = () => {
  const appState = useAppContext();

  return (
    <AppContext.Provider value={appState}>
      <Sidebar/>
      <MapContainer />
    </AppContext.Provider>
  )
}

export default App