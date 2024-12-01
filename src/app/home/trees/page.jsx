'use client'
import React from 'react'
import { TextField } from '@mui/material'
import TreesContainer from './components/treesContainer'
import Box from '@mui/material/Box'
import SideBar from '~/ui/shared/navBar/sideBar'


const Trees = () => {
  return (
    <div style={{ display:'flex', height:'100vh' }}>
      <Box sx={{
        display:'flex',
        flex:2
      }}>
        <SideBar/>
      </Box>


      <Box sx={{
        display:'flex',
        flexDirection:'column',
        flex:7,
        gap:'5px'
      }}>
        <Box sx={{
          height:'150px',
          display:'flex',
          alignItems:'center',
          justifyContent: 'center'
        }}>
          <TextField className='treesInput' id="standard-basic" label="Search for tree" variant="standard" />
        </Box>
        <TreesContainer></TreesContainer>
      </Box>
    </div>
  )
}

export default Trees
