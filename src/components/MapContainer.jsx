import React from 'react';
import { MapContainer as LeafMapContainer, TileLayer, useMapEvents, Tooltip, ZoomControl } from 'react-leaflet';
import MapPin from './MapPin';
import appContext from '../context/appContext';
import useMapLocations from '../hooks/useMapLocations';
import "leaflet/dist/leaflet.css";

const MapEventsHandler = (props) => {
  const { handleMapClick } = props || {}
  useMapEvents({
    click: (e) => handleMapClick(e),
  });
  return null;
};

const MapContainer = () => {
  const { locations, selectedLocation } = appContext()
  const { handleMapClick } = useMapLocations()

  return (
      <LeafMapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '100vh' }} zoomControl={false} >
        <MapEventsHandler handleMapClick={handleMapClick} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <ZoomControl position="topright" />
        {selectedLocation && <MapPin isAddIcon position={selectedLocation}></MapPin>}
        {locations.map((location) => (
          <MapPin key={location.id} position={location}>
            <Tooltip direction="auto" offset={[0, 20]} opacity={1} permanent>
              {location.name || location.id}
            </Tooltip>
          </MapPin>
        ))}
      </LeafMapContainer>
  );
};


export default MapContainer;