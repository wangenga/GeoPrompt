# 🌍 GeoPrompt

> **Guess the mystery city from AI-generated cultural clues. No maps. No names. Just vibes.**

![GeoPrompt Banner](https://img.shields.io/badge/Built%20With-SvelteKit%20%2B%20Node.js-indigo?style=for-the-badge)
![AI Powered](https://img.shields.io/badge/AI-Google%20Gemini-blue?style=for-the-badge)
![Deployed on](https://img.shields.io/badge/Deployed%20on-Vercel%20%2B%20Railway-black?style=for-the-badge)

---

## 🎮 What is GeoPrompt?

GeoPrompt is an AI-powered travel guessing game where players identify a mystery city based on cultural clues — food, traditions, and landmarks — generated in real time by an AI model. The AI adapts with each wrong guess, serving progressively more obvious clues until the player gets it or runs out of attempts.

- 🧠 **AI-generated clues** — no static question bank, every game is unique
- 🌶️ **Adaptive difficulty** — clues get more obvious with each wrong guess
- 🏆 **Score system** — fewer clues used = higher score
- 📸 **Shareable result card** — download and share your result as an image

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | SvelteKit + Tailwind CSS v4 |
| Backend | Node.js + Express.js |
| AI | Google Gemini API |
| Sharing | html-to-image |
| Persistence | localStorage |
| Frontend Hosting | Vercel |
| Backend Hosting | Railway |

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- A Google Gemini API key ([get one free](https://aistudio.google.com))

### 1. Clone the repo

```bash
git clone https://github.com/wangenga/GeoPrompt.git
cd GeoPrompt
```

### 2. Set up the backend

```bash
cd server
npm install
```

Create a `.env` file:
```bash
touch .env
```

Add your credentials:
```
GEMINI_API_KEY=your_key_here
PORT=3000
```

Start the server:
```bash
node index.js
# 🌍 GeoPrompt server running on port 3000
```

### 3. Set up the frontend

Open a new terminal:
```bash
cd client
npm install
```

Create a `.env` file:
```bash
touch .env
```

Add your backend URL:
```
VITE_API_URL=http://localhost:3000
```

Start the frontend:
```bash
npm run dev
# Open http://localhost:5173
```

---

## 📁 Project Structure

```
GeoPrompt/
├── client/                          # SvelteKit frontend
│   ├── src/
│   │   ├── routes/
│   │   │   ├── +layout.svelte       # Root layout + Tailwind import
│   │   │   └── +page.svelte         # Main game page
│   │   ├── lib/
│   │   │   ├── components/
│   │   │   │   ├── ClueBox.svelte   # Displays AI clue
│   │   │   │   ├── GuessInput.svelte# Input + submit
│   │   │   │   ├── ScoreBoard.svelte# Attempt + score tracker
│   │   │   │   └── ResultCard.svelte# End screen + share
│   │   │   └── stores/
│   │   │       └── gameStore.js     # Svelte state store
│   │   └── app.css                  # Tailwind entry
│   └── package.json
│
├── server/                          # Express backend
│   ├── routes/
│   │   └── game.js                  # /api/clue + /api/guess
│   ├── prompts/
│   │   └── templates.js             # AI prompt templates
│   ├── index.js                     # Express entry point
│   └── package.json
│
└── README.md
```

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/clue` | Returns an AI-generated clue for a given attempt number |
| `POST` | `/api/guess` | Validates the player's guess against the city |

### Example Request — `/api/clue`
```json
{ "attempt": 1 }
```

### Example Response
```json
{
  "clue": "This city is famous for its ancient tea ceremony traditions and wooden temple districts.",
  "city": "Kyoto"
}
```

---

## 🎯 Scoring System

| Attempts Used | Score |
|--------------|-------|
| 1 | 5 pts |
| 2 | 4 pts |
| 3 | 3 pts |
| 4 | 2 pts |
| 5 | 1 pt |

High scores are saved locally in the browser via `localStorage`.

---

## 🌐 Deployment

| Service | Platform | Config |
|---------|----------|--------|
| Frontend | Vercel | Root dir: `client`, Framework: SvelteKit |
| Backend | Railway | Root dir: `server`, Start: `node index.js` |

### Environment Variables

**Vercel (frontend):**
```
VITE_API_URL=https://your-railway-url.up.railway.app
```

**Railway (backend):**
```
GEMINI_API_KEY=your_key_here
PORT=3000
```

---

## 🧠 Built As Part Of

This project was built as a capstone for the **Moringa AI Program** — *Prompt-Powered Kickstart: Building a Beginner's Toolkit with GenAI*.

The goal was to use AI prompts to learn a new technology (SvelteKit + Node.js), build a real working project, and document the process clearly enough for anyone to replicate.

---

## 📄 License

MIT