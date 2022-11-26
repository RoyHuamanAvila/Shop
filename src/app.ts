import express, { Application, json } from 'express'
import cors from 'cors'

const app : Application = express();

app.use(cors())
app.use(json())

export default app;
