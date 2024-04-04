import React from 'react'
import Box from "@mui/material/Box"
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import AddLocation from './AddLocation'
import appContext from '../context/appContext'
import LocationInfoCard from './LocationInfoCard';

const Sidebar = () => {
  const { selectedLocation, locations } = appContext()

  return (
    <Box sx={{
      position: "fixed",
      left: "1%",
      top: "2.5%",
      backgroundColor: "rgba(255, 255, 255, 0.60)",
      width: "250px",
      height: "95%",
      zIndex: 1000,
      padding: "15px"
    }}>
      {selectedLocation &&
        <AddLocation />
      }
      <Divider>
        <Chip label="All Saved Locations" size="small" sx={{background:"white"}} />
      </Divider>
      {locations.length===0 && <center><br/>Please Add Few Locations</center>  }
      {locations.map((location) => <LocationInfoCard key={location.id} location={location}/>)}
    </Box>
  )
}

export default Sidebar