import { Box, Breadcrumbs } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <Box
    className="footer"
    sx={{
      height:'30vh',
      backgroundColor:"black",
      color: 'white',
      width:'100%',
      float: 'right'
    }}>
      <Box classname="logo">
        <h2>Siguria Digjitale</h2>
      </Box>
      <Box className="nav"
      sx={{
        width: '40%',
        display:'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        listStyle: 'none',
        margin: 'auto',
        
      }}>
        <Breadcrumbs sx={{
          color: 'white'
        }}>
        <Link to={"/"} >Ballina</Link>
        <Link to={"/why"} >Perse</Link>
        <Link to={"/about"} >Rreth nesh</Link>
        <Link to={"/contact"} >Kontakti</Link></Breadcrumbs>
      </Box>
    </Box>
  )
}

export default Footer
