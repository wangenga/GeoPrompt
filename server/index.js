import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import gameRoutes from './routes/game.js'


dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api', gameRoutes)

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`🌍 GeoPrompt server is running on port ${PORT}`)
})