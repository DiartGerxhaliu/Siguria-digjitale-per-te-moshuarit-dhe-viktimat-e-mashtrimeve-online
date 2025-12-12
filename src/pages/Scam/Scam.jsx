import React, { useState } from "react";
import OpenAI from "openai";
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
  CircularProgress,
  Checkbox,
  FormControlLabel,
  Link,
} from "@mui/material";

const client = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_KEY,
  dangerouslyAllowBrowser: true,
});

function Scam() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [accepted, setAccepted] = useState(false);

  const handleSend = async () => {
    if (!accepted) return;            // User must accept terms
    if (!text.trim()) return;

    setLoading(true);
    setResult("");

    try {
      const response = await client.responses.create({
        model: "gpt-4o",
        instructions: "A është ky email mashtrim? Përgjigju në shqip.",
        input: text,
      });

      setResult(response.output_text);
    } catch (error) {
      console.error(error);
      setResult("Gabim gjatë kontrollimit të emailit.");
    }

    setLoading(false);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "#f5f5f5",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 3,
      }}
    >
      <Card
        sx={{
          width: "100%",
          maxWidth: 650,
          padding: 2,
          borderRadius: 3,
          boxShadow: 4,
        }}
      >
        <CardContent>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            A eshte mashtrim ky email?
          </Typography>

          <TextField
            label="Vendos emailin këtu"
            placeholder="Ngjit emailin që dyshon se është mashtrim..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            multiline
            minRows={6}
            fullWidth
            sx={{ marginBottom: 2 }}
          />

          {/* Terms & Conditions */}
          <FormControlLabel
            control={
              <Checkbox
                checked={accepted}
                onChange={(e) => setAccepted(e.target.checked)}
              />
            }
            label={
              <Typography variant="body2">
                I agree to the{" "}
                <Link href="/terms" underline="hover">
                  Terms & Conditions
                </Link>
              </Typography>
            }
            sx={{ marginBottom: 2 }}
          />

          <Button
            variant="contained"
            size="large"
            fullWidth
            onClick={handleSend}
            disabled={loading || !accepted}   // Disabled until accepted
            sx={{ paddingY: 1.4, fontSize: "1rem" }}
          >
            {loading ? <CircularProgress size={26} color="inherit" /> : "Kontrollo Emailin"}
          </Button>

          {result && (
            <Box mt={3}>
              <Typography variant="h6">Rezultati:</Typography>
              <Card
                sx={{
                  marginTop: 1,
                  padding: 2,
                  background: "#fafafa",
                  borderRadius: 2,
                  borderLeft: "6px solid #1976d2",
                }}
              >
                <Typography>{result}</Typography>
              </Card>
            </Box>
          )}
        </CardContent>
      </Card>
    </Box>
  );
}

export default Scam;
