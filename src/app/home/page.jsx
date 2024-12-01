import React from 'react'
import FirstSection from './components/firstSection'
import SideBar from '~/ui/shared/navBar/sideBar'
import Box from '@mui/material/Box'


export default function page() {
  return (
    <div style={{ margin:0, padding:0, height:'100svh', width:'100%', display:'flex' }}>
      <Box sx={{
        display:'flex',
        flex:1.3
      }}>
        <SideBar/>
      </Box>

      <Box sx={{
        width:'100%',
        height:'100%',
        display:'flex',
        flex:7
      }}>
        <FirstSection/>
      </Box>
    </div>
  )
}
