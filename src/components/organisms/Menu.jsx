import { Box } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'



function Menu() {
  
  return (
    
    <Box sx={{
        fontFamily:'Lato',
        display:'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height:"10vh",
        position: 'fixed',
        top:'0',
        width: '100%',
        backgroundColor: 'white',
        zIndex:10
        }}>
      <Box className="logo"
      sx={{
        width:'40%',
        alignItems: 'center',
        padding: 'auto',
        margin: 'auto'
      }}>
        <h1><span>Siguia Digjitale</span></h1>
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
        <Link to={"/"} >Ballina</Link>
        <Link to={"/why"} >Perse</Link>
        <Link to={"/about"} >Rreth nesh</Link>
        <Link to={"/contact"} >Kontakti</Link>
        <Link to={"/is-this-a-scam"}>A eshte mashtrim</Link>
      </Box>

    </Box>
  )
}

export default Menu
