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
      titull:"Ruani te mosuarit",
      paragraf: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea asperiores temporibus dicta officia, quibusdam cum laudantium tempore esse repellat eligendi, fuga vitae neque iure placeat! Iste optio quae doloremque maiores.'
    },
    {
      image:IMG2,
      titull:"Ruani veten",
      paragraf:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea asperiores temporibus dicta officia, quibusdam cum laudantium tempore esse repellat eligendi, fuga vitae neque iure placeat! Iste optio quae doloremque maiores."
    },
    {
      image:IMG3,
      titull:"Rreziku eshte gjithkund",
      paragraf:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea asperiores temporibus dicta officia, quibusdam cum laudantium tempore esse repellat eligendi, fuga vitae neque iure placeat! Iste optio quae doloremque maiores."
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
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum rerum mollitia animi asperiores excepturi itaque, fugit hic provident, vero sequi placeat omnis modi quam, est necessitatibus atque recusandae quae consequuntur.</p>
            <ul>
              <li>PIKA1</li>
              <li>PIKA2</li>
              <li>PIKA3</li>
            </ul>
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
