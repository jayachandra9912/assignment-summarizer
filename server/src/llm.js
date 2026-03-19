import axios from "axios";
import { buildPrompt } from "./prompt.js";

export const summarizeText = async (text) => {
  const prompt = buildPrompt(text);

  const response = await axios.post(
    "https://openrouter.ai/api/v1/chat/completions",
    {
      model: "openai/gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.3
    },
    {
      headers: {
        "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "http://localhost:5173",
        "X-Title": "assignment-summarizer"
      }
    }
  );

  const content = response.data.choices[0].message.content;

  const jsonMatch = content.match(/\{[\s\S]*\}/);

  if (!jsonMatch) {
    console.error("Raw response:", content);
    throw new Error("No JSON found");
  }

  return JSON.parse(jsonMatch[0]);
};