import React from 'react'
import { Box } from '@mui/material'
import * as style from '~/app/page.module.css'
import Status from './status'
import Image from 'next/image'

const TreeCard = props => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '180px',
        height: '270px', // Fixed height for the card
        gap: '5px',
        borderRadius: '5px',
        border: 'none',
        padding: '5px',
        boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden', // Prevent overflow
      }}
    >
      <div className={style.treeCardImg} style={{ position: 'relative', height: '120px' }}> 
        <Image
          src="/trees.jpg" // Use relative path from public
          alt="Tree"
          layout="fill" // Makes image fill the container
          objectFit="cover" // Ensures the image doesn't stretch
        />
      </div>

      <div className={style.treeCardInfo} style={{ overflow: 'hidden' }}>
        <p style={{ fontWeight: 'bold', margin: 0 }}>{props.tree.name}</p>
        <p style={{ fontWeight: '', margin: 0 }}>Status: {props.tree.state ? 'Active': 'Unactive'}</p>
        <p style={{ fontWeight: '', margin: 0 }}>Tempeature: {props.tree.temperature}</p>
        <p style={{ fontWeight: '', margin: 0 }}>Humidity: {props.tree.humidity}</p>
        <Status />
      </div>
    </Box>
  )
}

export default TreeCard
