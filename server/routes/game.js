import express from 'express'
import dotenv from 'dotenv'
import { GoogleGenerativeAI } from '@google/generative-ai'


dotenv.config()

const router = express.Router()
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)
const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash'})

//POST /api/clue
router.post('/clue', async (req, res) => {
    const { attempt = 1 } = req.body

    const prompt = `You are a travel quiz host. Give clue number ${attempt} out of 5 about a mystery city.
    - Clue 1: Very vague (food or tradition only)
    - Clue 3: Moderately obvious
    - Clue 5: Almost a giveaway
    Never mention the city or country name directly.
    Respond ONLY in JSON with no markdown: { "clue": "...", "city", "..."}`

    const result = await model.generateContent(prompt)
    const text = result.response.text()
    const clean = text.replace(/```json|```/g, '').trim()

    res.json(JSON.parse(clean))
})

//POST /api/guess
router.post('/guess', async (req, res) => {
    const { guess, city } = req.body

    const isCorrect = guess.toLowerCase().trim() === city.toLowerCase().trim()

    res.json({
        correct: isCorrect,
        city: isCorrect ? city : null //only reaveal city if correct
    })
})

export default router