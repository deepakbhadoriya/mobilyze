import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import DeleteIcon from '@mui/icons-material/Delete';
import useMapLocations from '../hooks/useMapLocations';

const LocationInfoCard = (props) => {
  const { location, key } = props || {}
  const { handleUpdateLocation, handleRemoveLocation } = useMapLocations();

  return (
    <Card key={key} sx={{ display: 'flex', my:1, p:1 }} >
      <Box sx={{ display: 'flex', flexDirection: 'column', width:"100%" }}>
        <CardContent sx={{ flex: '1 0 auto', p: 1 }}>
          <Typography component="div" variant="body2">
            {location.name || location.id}
          </Typography>
          <Typography variant="caption" color="text.secondary" component="div">
            Lat: {location.lat} <br />
            Lng: {location.lng}
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: "space-evenly" }}>
          <IconButton aria-label="previous" sx={{ p: 0 }} onClick={() => handleUpdateLocation(location.id, "visible", !location.visible)} >
            {location.visible ? <VisibilityIcon sx={{ color: "primary.main" }} /> : <VisibilityOffIcon />}
          </IconButton>
          <IconButton aria-label="next" sx={{ p: 0, color: "red" }} onClick={() => handleRemoveLocation(location.id)}>
            <DeleteIcon />
          </IconButton>
        </Box>
      </Box>
    </Card>
  );
}

export default LocationInfoCard