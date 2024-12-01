import React from 'react'
import { Box } from '@mui/material'
import * as style from '~/app/page.module.css'
import Status from './status'

const TreeCard = props => {
  //const [id, setId] = useState(0)
  
  return (
    <Box sx={{
      display:'flex',
      flexDirection: 'Column',
      width:'auto',
      height: '180px',
      gap:'5px',
      borderRadius: '5px',
      border:'none', 
      padding:'5px',
      boxShadow:'0px 0px 20px rgba(0,0,0,0.1)'
    }}>
      <div className={style.treeCardImg}>  
        {/*<img src={props.img} alt="" />*/}
      </div>

      <div className={style.treeCardInfo}>
        <p style={{ fontWeight:'bold' }}>{props.info}</p>
        <Status/>
      </div>
    </Box>
  )
}


export default TreeCard