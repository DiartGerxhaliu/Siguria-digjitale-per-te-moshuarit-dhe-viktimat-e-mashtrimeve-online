import { Box } from '@mui/material'
import Banner from '../../components/organisms/Banner'
import IMG1 from '../../assets/istockphoto-1752520492-2048x2048.jpg'
import FlipCard from '../../components/organisms/FlipCard'
function Why() {
    return (
        <Box>
            <Banner
            bannerIMG={IMG1}
            titulli={"Prese po merremi me kete problem"}
            paragraph={" "}
            />

            <Box
            sx={{
                margin: '100px auto',
                display: 'flex',
                flexDirection:'row',
                justifyContent:'space-around'
            }}>

                <FlipCard
                frontText={"Pershendetje"}
                backText={"123123"}
                />
                <FlipCard
                frontText={"Pershendetje"}
                backText={"123123"}
                />
                <FlipCard
                frontText={"Pershendetje"}
                backText={"123123"}
                />

            </Box>
        </Box>

    )
}

export default Why
