import React from 'react'
import FirstSection from './components/firstSection'
import NavBar from '~/ui/shared/navBar/sideBar'
import Box from '@mui/material/Box'


export default function page() {
  return (
    <div style={{ margin:0, padding:0, height:'100svh', width:'100vw', display:'flex' }}>
      <NavBar/>
      <Box sx={{
        width:'100%',
        height:'100%',
        display:'flex'
      }}>
        <FirstSection/>
      </Box>
    </div>
  )
}
