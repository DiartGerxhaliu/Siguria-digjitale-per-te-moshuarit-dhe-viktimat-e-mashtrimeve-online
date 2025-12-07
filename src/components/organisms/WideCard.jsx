import { Box } from '@mui/material'
import React from 'react'

function WideCard({
    direction,
    titulli,
    image,
    float,
    paragraph
}) {
  return (
    <Box
    classname="wideCard"
    sx={{
        display:'flex',
        flexDirection:`${direction}`,
        justifyContent:"space-around",
        alignItems:'center',
        width:'80%',
        float: `${float}`,
        height: '20vh',
        marginTop: '10vh',
        backgroundColor:'gray'
    }}>
        <Box
        classname="image">
            <img src={image} alt={titulli} />
        </Box>
        <Box
        classname="text">
            <h2>{titulli}</h2>
            <p>{paragraph}</p>
        </Box>
    </Box>
  )
}

export default WideCard
