import { Box } from '@mui/material'
import React from 'react'

function Banner(
    {bannerIMG, 
    titulli, 
    paragraph}) {
  return (
    <Box
    classname='Banner'
    sx={{
        width:'100%',
        height:'95vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundImage: `url(${bannerIMG})`,
        backgroundSize: `cover`,
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center'
    }}>
        <Box sx={{
            backgroundColor:'rgba(0,0,0,0.4)',
            color:'white',
            alignContent: 'center',
            padding:'auto',
            height: "100%"
        }}>
            
            <h1>{titulli}</h1>
            <p>{paragraph}</p>

        </Box>
    </Box>
  )
}

export default Banner
