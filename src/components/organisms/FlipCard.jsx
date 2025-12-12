import React, { useState } from "react";
import { Box } from "@mui/material";

function FlipCard({ frontText, backText }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <Box
      onClick={() => setFlipped(!flipped)}
      sx={{
        width: "30%",
        height: "45vh",
        perspective: "1000px",
        cursor: "pointer",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "100%",
          transformStyle: "preserve-3d",
          transition: "transform 0.6s",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)"
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            background: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection:"column",
            borderRadius: "12px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
            
          }}
        >
          <h2>{frontText}</h2>
            
        </Box>

        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            background: "#222",
            color: "white",
            transform: "rotateY(180deg)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "12px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
          }}
        >
          {}
          <p>{backText}</p>
        </Box>
      </Box>
    </Box>
  );
}

export default FlipCard;
