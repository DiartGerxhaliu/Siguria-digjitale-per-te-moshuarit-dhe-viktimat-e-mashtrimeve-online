import React, { useState } from 'react'
import { Box, Button } from '@mui/material'
import Banner from '../../components/organisms/Banner'
import WideCard from '../../components/organisms/WideCard'
import IMG1 from '../../assets/istockphoto-1418355666-2048x2048.jpg'

function AboutUs() {
  // --- State për numrat scam ---
  const [scamNumbers, setScamNumbers] = useState([
    "+383 49 123 456 – Mashtrim bankar",
    "+355 68 987 654 – SMS mashtruese"
  ])

  const addScamNumber = () => {
    const newNumber = prompt("Shkruaj numrin scam:")
    if (newNumber) {
      setScamNumbers([...scamNumbers, newNumber])
    }
  }

  const wideInfo = [
    // WideCard me tekst edukativ + imazh
    {
      direction: "row",
      titulli: "Si t’i dallojmë mashtrimet online",
      image: "https://www.newmanwebsolutions.com/wp-content/uploads/2023/04/two-factor-authentication.jpeg.webp",
      float: "left",
      paragraph: (
        <ol className="about-list">
          <li>Mos klikoni në linke të dyshimta</li>
          <li>Mos ndani fjalëkalime ose kode verifikimi</li>
          <li>Kontrolloni gjithmonë dërguesin e mesazhit</li>
          <li>Kërkoni ndihmë nga një person i besuar</li>
        </ol>
      )
    },

    {
      direction: "row",
      titulli: "Video udhëzuese për mashtrimet online",
      image: "",
      float: "right",
      paragraph: (
        <Box sx={{ display: 'flex', gap: '20px', flexWrap: 'nowrap' }}>
          <iframe
            src="https://www.youtube.com/embed/JHGX9ee-X2I"
            title="Video 1"
            allowFullScreen
            style={{ width: "250px", height: "170px", marginLeft: '40px' }}
          />
          <iframe
            src="https://www.youtube.com/embed/fgd-osFId00"
            title="Video 2"
            allowFullScreen
            style={{ width: "250px", height: "170px" }}
          />
          <iframe
            src="https://www.youtube.com/embed/MB5VDIebMd8"
            title="Video 2"
            allowFullScreen
            style={{ width: "250px", height: "170px" }}
          />
        </Box>
      )
    },

    // WideCard me numrat scam + buton
    {
      direction: "row-reverse",
      titulli: "Numra të rrezikshëm",
      image: "https://tuckerdisability.com/wp-content/uploads/2025/01/senior-scam-soc-512x288.webp",
      float: "left",
      paragraph: (
        <Box>
          <ul className="about-list">
            {scamNumbers.map((num, index) => (
              <li key={index}>{num}</li>
            ))}
          </ul>

          <Button
            variant="contained"
            color="error"
            onClick={addScamNumber}
            sx={{ marginTop: "10px" }}
          >
            ➕ Shto numër scam
          </Button>
        </Box>
      )
    },

    // WideCard me kontakt
    {
  direction: "row",
  titulli: "Kontakto një person të besuar",
  image: "",
  float: "right",
  paragraph: (
    <Box className="contact-box" sx={{ textAlign: 'center', marginTop: '10px', display: 'flex', flexDirection: 'column', gap: 1 }}>
      <p>Nëse dyshoni për mashtrim:</p>
      <Button
        variant="contained"
        color="error"
        sx={{ fontSize: '16px', marginTop: '10px' }}
        onClick={() => {
            const viberNumber = prompt("Shkruaj numrin që dëshiron të kontaktojësh me Viber:");
            if (viberNumber) {
            // hap Viber app në mobile ose desktop (nëse e ka të instaluar)
            window.location.href = `viber://chat?number=${viberNumber}`;
            }
        }}
>
  📱 Kontakto
</Button>

    </Box>
  )
}


  ]

  return (
    <Box className="about-container">
      <Banner
        bannerIMG={IMG1}
        titulli="Siguria Digjitale për të Moshuarit"
        paragraph="Kjo faqe ofron udhëzime të thjeshta për të parandaluar mashtrimet online dhe për të rritur vetëdijen digjitale."
      />

      <Box className="cards-container">
        {wideInfo.map((item, index) => (
          <WideCard
            key={index}
            direction={item.direction}
            titulli={item.titulli}
            image={item.image}
            float={item.float}
            paragraph={item.paragraph}
          />
        ))}
      </Box>
    </Box>
  )
}

export default AboutUs
