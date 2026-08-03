import "dotenv/config";
import express from "express";
import sendEmail from "./api/send-email.js";
import submit from "./api/submit.js";

const app = express();
app.use(express.json());

app.post("/api/send-email", sendEmail);
app.post("/api/submit", submit);

const PORT = process.env.API_PORT || 3001;
app.listen(PORT, () => {
  console.log(`API dev server running at http://localhost:${PORT}`);
});
