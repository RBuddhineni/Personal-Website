import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();
const app = express();
app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

// 🧠 MongoDB setup (optional for saving emails)
mongoose
  .connect(process.env.MONGO_URI || "", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch(() => console.log("⚠️ No MongoDB connection, continuing..."));

const EmailSchema = new mongoose.Schema({ email: String });
const Email = mongoose.model("Email", EmailSchema);

// ✉️ Nodemailer setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER, // your Gmail address
    pass: process.env.GMAIL_PASS, // your app password
  },
});

// ✅ Route: store email in DB
app.post("/api/submit", async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ message: "Email required" });
  try {
    if (mongoose.connection.readyState === 1) {
      await Email.create({ email });
    }
    console.log("📩 Email received:", email);
    res.json({ message: "Thanks for connecting!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// ✅ Route: send email (e.g. contact form)
app.post("/api/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  if (!email || !message)
    return res.status(400).json({ message: "Missing required fields" });

  const mailOptions = {
    from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
    to: process.env.GMAIL_USER, // send to yourself
    subject: `New message from ${name || "Visitor"}`,
    text: `From: ${email}\n\n${message}`,
    html: `<p><strong>From:</strong> ${email}</p><p>${message}</p>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("📨 Email sent from:", email);
    res.json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("❌ Email send failed:", error);
    res.status(500).json({ message: "Failed to send email" });
  }
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));