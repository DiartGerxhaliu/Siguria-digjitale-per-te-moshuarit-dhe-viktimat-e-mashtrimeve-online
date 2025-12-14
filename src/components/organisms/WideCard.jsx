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
      className="wideCard"
      sx={{
        display:'flex',
        flexDirection:`${direction}`,
        justifyContent:"space-around",
        alignItems:'left',
        width:'80%',
        float: `${float}`,
        marginTop: '10px',
        backgroundColor: "#d0dcebff",
        paddingTop: "40px",
        paddingBottom: "40px",
        paddingLeft: "20px",
        paddingRight: "20px",
        borderRadius: "25px",       
        boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
        margin: "10px",
        flexWrap: 'wrap',  
        marginBottom: '20px'          
      }}
    >
      {image && (
        <Box
          className="image"
          sx={{
            order: float === 'left' ? 0 : 1, 
            marginRight: float === 'left' ? '20px' : 0,
            marginLeft: float === 'right' ? '20px' : 0,
          }}
        >
          <img 
            src={image} 
            alt={titulli}
            style={{
              width: '300px',
              height: 'auto',
              borderRadius: '15px', 
            }}  
          />
        </Box>
      )}

      <Box
        className="text"
        sx={{
          flex: 1,
        }}
      >
        <h2>{titulli}</h2>
        <div>{paragraph}</div>
      </Box>
    </Box>
  )
}

export default WideCard
