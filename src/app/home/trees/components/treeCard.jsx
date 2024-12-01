import React, { useState } from 'react'
import { Box, Button } from '@mui/material'
import * as style from '~/app/page.module.css'
import Image from 'next/image'

const TreeCard = props => {
  //const [id, setId] = useState(0) 
  const [state, setState] = useState(false)
  
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '180px',
        height: '310px', // Fixed height for the card
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

      <div className={style.treeCardInfo}>
        <p style={{ fontWeight: 'bold', margin: 0 }}>{props.tree.name}#1</p>
        <p style={{ fontWeight: '', margin: 0 }}>Status: {props.tree.state ? 'Active': 'Unactive'}</p>
        <p style={{ fontWeight: '', margin: 0 }}>Tempeature: {props.tree.temperature}</p>
        <p style={{ fontWeight: '', margin: 0 }}>Humidity: {props.tree.humidity}</p>
        <Button 
          style={{
            height:'25px'
          }}
          color={state ? 'error' : 'primary'}
          onClick={() => setState(!state)}
        >
          {state ? <p>Apagar</p> : <p>Prender</p>}
        </Button>
      </div>
    </Box>
  )
}

export default TreeCard
