import React from 'react'
import TextField from '@mui/material/TextField';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import Box from "@mui/material/Box"
import IconButton from "@mui/material/IconButton"
import useMapLocations from '../hooks/useMapLocations';
import appContext from '../context/appContext';

const AddLocation = () => {
  const { selectedLocation, setSelectedLocation } = appContext()
  const { handleAddLocation } = useMapLocations()

  const handleOnNameChange = (e) => {
    setSelectedLocation({ ...selectedLocation, name: e.target.value })
  }

  return (
    <Box sx={{background:"white", p:1, pb:0, mb:1 }}>
      <TextField id="outlined-basic" size='small' label="New Location Name" variant="outlined" value={selectedLocation.name} onChange={handleOnNameChange} sx={{ width: "100%" }} />
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <IconButton aria-label="delete" onClick={handleAddLocation} sx={{ background: "white" }}>
          <CheckCircleIcon color='success' />
        </IconButton>
        <IconButton aria-label="delete" onClick={() => setSelectedLocation(null)} sx={{ background: "white" }}>
          <CancelIcon color='disabled' />
        </IconButton>
      </Box>
    </Box>
  )
}

export default AddLocation