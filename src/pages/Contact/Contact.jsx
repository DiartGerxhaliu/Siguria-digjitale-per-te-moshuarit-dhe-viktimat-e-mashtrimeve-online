import React, { useState } from 'react'
import { Box, TextField, Button, Typography } from '@mui/material'
import Banner from '../../components/organisms/Banner'
import IMG1 from '../../assets/istockphoto-1752520492-2048x2048.jpg'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Vetëm demo: shfaq alert
    alert(`Emri: ${formData.name}\nEmail: ${formData.email}\nMesazhi: ${formData.message}`)
    // Reset form
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <Box>
      {/* Banner */}
      <Banner
        bannerIMG={IMG1}
        titulli="Na Kontakto"
        paragraph="Këtu mund të na dërgoni pyetje ose mesazhe për sigurinë digjitale."
      />

      {/* Contact Form */}
      <Box
        sx={{
          minHeight: '60vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 2,
          backgroundColor: '#f0f2f5'
        }}
      >
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            width: '100%',
            maxWidth: '400px',
            backgroundColor: 'white',
            padding: 4,
            borderRadius: 2,
            boxShadow: '0px 4px 15px rgba(0,0,0,0.1)'
          }}
        >
          <Typography variant="h5" gutterBottom>
            Dërgo Mesazh
          </Typography>

          <TextField
            label="Emri"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <TextField
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <TextField
            label="Mesazhi"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            multiline
            rows={4}
          />
          <Button type="submit" variant="contained" color="primary">
            Dërgo Mesazh
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default Contact
