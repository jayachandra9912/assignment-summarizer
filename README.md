# AI Text Summarizer

## Overview

This is a small full-stack application that takes unstructured text as input and returns a structured summary using an LLM.

The app generates:

* A one-line summary
* Three key points
* A sentiment label (positive, neutral, or negative)

The goal of this project was to build something simple, functional, and easy to explain, focusing mainly on LLM integration and clean architecture.

---

## Tech Stack

**Frontend**

* React (Vite)
* Axios
* Plain CSS

**Backend**

* Node.js
* Express

**Other**

* OpenRouter (LLM API)
* dotenv
* cors

---

## How it works

The flow is straightforward:

1. The user pastes text into the UI.
2. The frontend sends a request to the backend.
3. The backend validates the input.
4. A prompt is created and sent to the LLM.
5. The LLM returns a structured response.
6. The backend parses the response and sends it back.
7. The frontend displays the result.

---

## Running the project

### Clone the repo

```bash
git clone <your-repo-link>
cd assignment-summarizer
```

### Backend setup

```bash
cd server
npm install
```

Create a `.env` file:

```
OPENROUTER_API_KEY=your_api_key
```

Run the server:

```bash
node src/index.js
```

---

### Frontend setup

```bash
cd client
npm install
npm run dev
```

Open:

```
http://localhost:5173
```

---

## API

POST `/api/summarize`

Request:

```json
{
  "text": "Your input text"
}
```

Response:

```json
{
  "summary": "One sentence summary",
  "keyPoints": ["Point 1", "Point 2", "Point 3"],
  "sentiment": "neutral"
}
```

---

## Prompt approach

I kept the prompt simple but strict.
It clearly defines the JSON structure and restricts extra output.

This helped reduce parsing issues and made the response consistent.

---

## Error handling

Handled a few basic cases:

* Empty input
* API failures
* Invalid JSON from the model
* Network errors on frontend

---

## UI

I used plain CSS to keep things simple.
The focus was on clarity rather than complex design, with a clean layout and clear separation of results.

---

## Trade-offs

* Kept only one API endpoint to avoid over-engineering
* Did not add authentication since it wasn’t required
* Focused more on prompt reliability than advanced validation
* UI is simple and functional rather than feature-heavy

---

## What I would improve

If I had more time, I would:

* Add file upload support (PDF/text)
* Improve validation using a schema library
* Add better loading states and animations
* Deploy the app
* Add tests

---

## Example

Input:

```
The product is amazing and works very well. However, delivery was delayed and customer service was slow.
```

Output:

* Summary: The product works well but has issues with delivery and customer service.
* Key Points:

  * Good product quality
  * Delivery delay
  * Slow customer service
* Sentiment: Neutral

---

## Final note

This project was mainly about demonstrating how to integrate an LLM into a simple full-stack app while keeping the code clean and easy to understand.
