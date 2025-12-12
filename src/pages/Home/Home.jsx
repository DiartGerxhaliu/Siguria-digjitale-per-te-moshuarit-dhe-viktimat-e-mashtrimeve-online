import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Banner from '../../components/organisms/Banner'
import IMG1 from '../../assets/istockphoto-1463637004-2048x2048.jpg'
import IMG2 from '../../assets/istockphoto-1418355666-2048x2048.jpg'
import IMG3 from '../../assets/istockphoto-1752520492-2048x2048.jpg'
import Card from '../../components/organisms/Card'

export default function Home() {

  let [banner, setBanner]= useState(IMG1);

  //kartat krejt ne fund
  let cardsInfo = [
    {
      //IMG1 eshte e importuar ne fillim t'faqes munesh me ja ndrru ama kopijo formatin
      image:IMG1,
      titull:"Ruani të moshuarit",
      paragraf: "Të moshuarit janë shpesh shënjestër e mashtrimeve online. Ndihmojini të dallojnë mesazhet e rreme, të mos japin të dhëna personale dhe t’i kontrollojnë gjithmonë burimet. Së bashku mund t’i mbajmë të sigurt."
    },
    {
      image:IMG2,
      titull:"Ruani veten",
      paragraf: 'Mbrojtja juaj në internet fillon nga ju. Përdorni fjalëkalime të forta, mos hapni linke të dyshimta dhe verifikoni gjithmonë burimin e informacioneve. Qëndroni vigjilent—siguria juaj është prioritet.'
    },
    {
      image:IMG3,
      titull:"Rreziku eshte gjithkund",
      paragraf:'Internetin e përdorim çdo ditë, por rreziqet fshihen kudo, nga mesazhet mashtruese deri te faqet e rreme. Qëndroni të kujdesshëm dhe kontrolloni çdo hap përpara se të ndani të dhënat tuaja. Siguria fillon me vëmendjen.'
    },
  ]
 
  const interval = (g) => {
    //qikjo e ndrron Imazhin e bannerit qato setBanner
    return setInterval(() => {
      if (g === IMG1) {
        setBanner(IMG2);
      } else if (g === IMG2) {
        setBanner(IMG3);
      } else {
        setBanner(IMG1);
      }
    }, 5000);
  };

  useEffect(() => {
    const id = interval(banner);

    return () => clearInterval(id);
  }, [banner]);

  return (
    <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        fontFamily: 'Lato',
        width:'100%',
    }}>

      {/* 
      Qiky osht banneri
      edhe titullin munum me ba mu ndrru nese doni */}
      
      <Banner 
        bannerIMG={banner}
        titulli={"Siguria digjitale për të moshuarit dhe viktimat e mashtrimeve online"}
        paragrafi={""}
        />
        
        <Box
        classname="section"
        sx={{
          height:'50vh',
          display:'flex',
          justifyContent:'flex-start',
          color:'white',
          backgroundColor:'black',
          margin:'100px auto',
          padding:'100px'
        }}>

          {/* Qiky osht qaj seksioni i zi*/}
          <Box sx={{height:'100%', width:'40%'}}>
            <h1>Cfare duam ne te arrijme</h1>
            <p>Qëllimi i këtij website është një zgjidhje digjitale që adreson një nevojë të qartë shoqërore:
               rritjen e sigurisë kibernetike te të moshuarit dhe te individët në përdorimin e teknologjisë.
               Kjo kategori e popullsisë, shpesh përballet me mashtrime online, phishing,
               abuzime financiare dhe rreziqe. Kjo është një platformë të qasshme, e thjeshtë dhe edukative, e cila
               shërben si një mjet parandalues dhe shpjegues për situatat e rrezikshme.</p>
          </Box>
          <Box
          sx={{position:'relative',
            height:'50%', width:'40%'
          }}>

            <img src={IMG1} alt="" 
            style={{
              position:'absolute', 
              top:'40', 
              left:"40",
              width:'80%',
              }}/>
            <img src={IMG2} alt="" 
            style={{
              position:'absolute',
              top:'50%',
              left:'70%',
              width:'80%',
            }}/>
          </Box>
        </Box>

        <Box 
        classname={'cards'}
        sx={{
          width:'100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          margin:'50px auto',
        }}>
          {cardsInfo.map((gal)=>{
          return <Box sx={{width:'30%'}}>
            <Card
          img={gal.image}
          titull={gal.titull}
          paragraf={gal.paragraf}
          />
          </Box>
        })}
        </Box>
    </Box>
  )
}
