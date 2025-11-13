import mongoose from "mongoose";

const EmailSchema = new mongoose.Schema({ email: String });
const Email =
  mongoose.models.Email || mongoose.model("Email", EmailSchema);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email required" });
  }

  try {
    if (process.env.MONGO_URI) {
      if (mongoose.connection.readyState === 0) {
        await mongoose.connect(process.env.MONGO_URI);
      }

      await Email.create({ email });
    }

    console.log("📩 Email saved:", email);
    return res.json({ message: "Thanks for connecting!" });
  } catch (error) {
    console.error("❌ Error:", error);
    return res.status(500).json({ message: "Server error" });
  }
}
