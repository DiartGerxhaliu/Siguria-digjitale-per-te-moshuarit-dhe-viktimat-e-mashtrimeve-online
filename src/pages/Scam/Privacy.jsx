import React from "react";
import { Box, Typography, Card, CardContent, Divider } from "@mui/material";

function Privacy() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        px: 2,
        pt: "20vh", 
        pb: 4,
        backgroundColor: "#f5f5f5",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Card
        sx={{
          maxWidth: 700,
          width: "100%",
          borderRadius: 3,
          boxShadow: 3,
        }}
      >
        <CardContent sx={{ p: 4 }}>
          <Typography variant="h4" fontWeight="bold" gutterBottom component="h1">
            Privacy Policy
          </Typography>

          <Divider sx={{ mb: 3 }} />

          <Typography variant="body1" component="p" sx={{ mb: 2 }}>
            Ky aplikacion nuk ruan dhe nuk shpërndan të dhënat e përdoruesve.
            Teksti i futur përdoret vetëm për analizë momentale nga inteligjenca artificiale.
          </Typography>

          <Typography variant="body1" component="p" sx={{ mb: 2 }}>
            Asnjë informacion personal nuk ruhet në serverë dhe nuk ndahet me palë të treta.
            Përdoruesi mbetet i vetëm përgjegjës për të dhënat që fut.
          </Typography>

          <Typography variant="body1" component="p" sx={{ mb: 2 }}>
            Të dhënat përpunohen vetëm përkohësisht për qëllime analizimi dhe
            nuk mbahen në mënyrë të qëndrueshme.
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            component="p"
            sx={{ mt: 4 }}
          >
            Duke përdorur këtë aplikacion, ju pranoni këtë Politikë Privatësie.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Privacy;
