import React, { useState, useRef } from "react";
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
  Alert,
} from "@mui/material";

const client = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_KEY,
  dangerouslyAllowBrowser: true,
});

const REQUEST_COOLDOWN_MS = 8000; // 8 seconds

function Scam() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [error, setError] = useState("");

  const lastRequestTime = useRef(0);
  const requestInFlight = useRef(false);

  const handleSend = async () => {
    const now = Date.now();

    if (!accepted || !text.trim()) return;

    if (requestInFlight.current) {
      setError("Ju lutem prisni, kërkesa është duke u përpunuar.");
      return;
    }

    if (now - lastRequestTime.current < REQUEST_COOLDOWN_MS) {
      setError("Ju lutem prisni disa sekonda para kërkesës tjetër.");
      return;
    }

    requestInFlight.current = true;
    lastRequestTime.current = now;
    setLoading(true);
    setError("");
    setResult("");

    try {
      const response = await client.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: "A është ky email mashtrim? Përgjigju në shqip.",
          },
          {
            role: "user",
            content: text,
          },
        ],
      });

      setResult(response.choices[0].message.content);
    } catch (err) {
      console.error(err);

      if (err?.status === 429) {
        setError(
          "Kufiri i kërkesave u tejkalua. Ju lutem prisni pak dhe provoni përsëri."
        );
      } else {
        setError("Ndodhi një gabim gjatë analizës së emailit.");
      }
    }

    setLoading(false);
    requestInFlight.current = false;
  };

  const noHoverLink = {
    color: "inherit",
    textDecoration: "none",
    cursor: "default",
    "&:hover": {
      textDecoration: "none",
    },
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "#f5f5f5",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 3,
      }}
    >
      <Card sx={{ maxWidth: 650, width: "100%", borderRadius: 3, boxShadow: 4 }}>
        <CardContent>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            A është mashtrim ky email?
          </Typography>

          <TextField
            label="Vendos mesazhin e emailit këtu"
            placeholder="Ngjit emailin që dyshon se është mashtrim..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            multiline
            minRows={6}
            fullWidth
            sx={{ mb: 2 }}
          />

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
                <Link href="/terms" sx={noHoverLink}>
                  Terms and Conditions
                </Link>{" "}
                and{" "}
                <Link href="/privacy" sx={noHoverLink}>
                  Privacy Policy
                </Link>
              </Typography>
            }
            sx={{ mb: 2 }}
          />

          {error && (
            <Alert severity="warning" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}

          <Button
            fullWidth
            variant="contained"
            size="large"
            onClick={handleSend}
            disabled={!accepted || loading}
            sx={{ py: 1.4 }}
          >
            {loading ? (
              <CircularProgress size={26} color="inherit" />
            ) : (
              "Kontrollo Emailin"
            )}
          </Button>

          {result && (
            <Box mt={3}>
              <Typography variant="h6">Rezultati:</Typography>
              <Card sx={{ mt: 1, p: 2, background: "#fafafa" }}>
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
