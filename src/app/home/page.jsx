import React from 'react'
import FirstSection from './components/firstSection'
import SideBar from '~/ui/shared/navBar/sideBar'
import Box from '@mui/material/Box'


export default function page() {
  return (
    <div style={{ height:'100svh', width:'100vw', display:'flex' }}>
      <Box sx={{
        display:'flex',
        flex:1.3
      }}>
        <SideBar/>
      </Box>
      
      <Box sx={{
        display:'flex',
        flex:7,
        flexDirection:'column',
        gap:'5px'
      }}>
        <FirstSection/>
      </Box>
    </div>
  )
}
