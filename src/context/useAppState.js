import { useState } from 'react'

const useAppState = () => {
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);

  return ({
    locations, 
    setLocations, 
    selectedLocation, 
    setSelectedLocation
  })
}

export default useAppState