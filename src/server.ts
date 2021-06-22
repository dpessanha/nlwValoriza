import "reflect-metadata"
import express, { response } from "express"
import "./database"
import { router } from "./routes"

const PORT = 3000
const HOST = "http://127.0.0.1"
const app = express()

app.use(express.json())
app.use(router)

app.listen(PORT, () => {
  console.log(`Server is running at ${HOST}:${PORT}.`)
})