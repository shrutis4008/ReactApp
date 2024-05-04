import express from 'express'
import cookieparser from 'cookie-parser'

const app = express()
app.use(express.json());

export default app 