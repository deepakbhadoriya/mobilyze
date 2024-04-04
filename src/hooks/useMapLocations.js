import { useEffect } from 'react'
import appContext from '../context/appContext';
import { v4 as uuidv4 } from 'uuid';

const useMapLocations = () => {
  const { locations, setLocations, selectedLocation, setSelectedLocation } = appContext()

  const handleMapClick = (e) => {
    const { lat, lng } = e.latlng;
    setSelectedLocation({ lat, lng, id:uuidv4(), visible:true });
  };

  const handleAddLocation = () => {
    if (selectedLocation) {
      setLocations([...locations, selectedLocation]);
      localStorage.setItem('locations', JSON.stringify([...locations, selectedLocation]));
    }
    setSelectedLocation(null)
  };

  const handleRemoveLocation = (id) => {
    const updatedLocations = locations.filter((location) => location.id !== id);
    setLocations(updatedLocations);
    localStorage.setItem('locations', JSON.stringify(updatedLocations));
  };

  const handleUpdateLocation = (id, key, value)=>{
    const updatedLocations = locations.map((location) => location.id === id?({...location, [key]:value}):location);
    setLocations(updatedLocations);
    localStorage.setItem('locations', JSON.stringify(updatedLocations));
  }

  useEffect(() => {
    const storedLocations = JSON.parse(localStorage.getItem('locations'));
    if (storedLocations) {
      setLocations(storedLocations);
    }
  }, []);

  return ({
    handleMapClick,
    handleAddLocation,
    handleRemoveLocation,
    handleUpdateLocation
  })
}

export default useMapLocations