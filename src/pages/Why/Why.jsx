import { Box } from '@mui/material'
import Banner from '../../components/organisms/Banner'
import IMG1 from '../../assets/istockphoto-1752520492-2048x2048.jpg'
import FlipCard from '../../components/organisms/FlipCard'
function Why() {
    return (
        <Box>
            <Banner
            bannerIMG={IMG1}
            titulli={"Përse po merremi me këtë problem?"}
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
                frontText={"Rëndësia e ndërgjegjësimit"}
                backText={"Të moshuarit shpesh janë viktima të mashtrimeve online sepse nuk janë të informuar mjaftueshëm për rreziqet. Edukimi i tyre ndihmon në parandalimin e humbjeve."}
                />
                <FlipCard
                frontText={"Rritja e sigurisë digjitale"}
                backText={"Projekti ynë synon të tregojë mënyra praktike për të mbrojtur informacionin personal, fjalëkalimet dhe transaksionet bankare online."}
                />
                <FlipCard
                frontText={"Mbështetje për viktimat"}
                backText={"Duke i informuar për rreziqet dhe duke ofruar udhëzime hap pas hapi, ata mund të reagojnë shpejt në rast mashtrimi dhe të kërkojnë ndihmë."}
                />

            </Box>
        </Box>

    )
}

export default Why
