import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";

function Terms() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        padding: 4,
        background: "#f5f5f5",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Card sx={{ maxWidth: 700, padding: 3 }}>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            Terms & Conditions
          </Typography>

          <Typography variant="p">
            Duke përdorur këtë shërbim, ju pranoni që teksti i dërguar
            analizohet nga inteligjenca artificiale vetëm për qëllime informimi. <br />
          </Typography>

          <Typography variant="p">
            Ky sistem nuk jep këshilla ligjore dhe nuk mban përgjegjësi për
            vendimet tuaja. Përdoreni vetëm si mjet ndihmës. <br />
          </Typography>

          <Typography variant="p">
            Asnjë informacion i dërguar nuk ruhet në serverë lokalë të projektit
            tuaj — vetëm përpunim i përkohshëm nga API. <br />
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Terms;
