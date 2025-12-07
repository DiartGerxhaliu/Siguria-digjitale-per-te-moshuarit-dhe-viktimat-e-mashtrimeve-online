import { Box } from '@mui/material'
import Banner from '../../components/organisms/Banner'
import React from 'react'
import WideCard from '../../components/organisms/WideCard'
import IMG1 from '../../assets/istockphoto-1418355666-2048x2048.jpg'

function AboutUs() {
      let wideInfo = [
        {
            direction: "row",
            titulli: "Diqka",
            image: "",
            float: "left",
            paragraph:""
        },
        {
            direction: "row-reverse",
            titulli: "Diqka",
            image: "",
            float: "right",
            paragraph:""
        },{
            direction: "row",
            titulli: "Diqka",
            image: "",
            float: 'left',
            paragraph:""
        }
    ]
  return (
    <Box>
        <Banner
         bannerIMG={IMG1}
         titulli={"Rreth mesazhit tone"}
         paragraph={''}
        />
        <Box>
        {
            wideInfo.map((gal)=>{
                return <WideCard
                direction={gal.direction}
                titulli={gal.titulli}
                image={gal.image}
                float={gal.float}
                paragraph={gal.paragraph}
                />
            })
        }
        </Box>
    </Box>
  )
}

export default AboutUs
