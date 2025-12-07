import { Box } from '@mui/material'
import React from 'react'

function Card({ img, titull, paragraf }) {
  return (
    <Box
      className="card"
      sx={{
        width: '90%',
        height: '43.5vh',
        backgroundImage: `
          linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, 1) 100%
          ),
          url(${img})
        `,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: '5%'
      }}
    >
      <h1>{titull}</h1>
      <p>{paragraf}</p>
    </Box>
  )
}

export default Card

