import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { summarizeText } from "./llm.js";
import { validateText } from "./validate.js";

dotenv.config();

console.log("API KEY:", process.env.OPENROUTER_API_KEY);

const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/summarize", async (req, res) => {
  try {
    console.log("Incoming request:", req.body);

    const text = req.body?.text;

    if (!text) {
      return res.status(400).json({ error: "No text provided" });
    }

    const result = await summarizeText(text);

    console.log("LLM result:", result);

    res.json(result);
  } catch (err) {
    console.error("FULL ERROR:", err);
    res.status(500).json({ error: err.message });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});