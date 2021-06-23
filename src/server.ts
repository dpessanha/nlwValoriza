import "reflect-metadata"
import express, { Request, Response, NextFunction } from "express"
import "express-async-errors"
import "./database"
import { router } from "./routes"

const PORT = 3000
const HOST = "http://127.0.0.1"
const app = express()

app.use(express.json())
app.use(router)
app.use((err:Error, req:Request, res:Response, next:NextFunction) =>{
  if(err instanceof Error){
    return res.status(400).json({
      error: err.message
    })
  }
  return res.status(500).json({
    status: "error",
    message: "Internal Server Error"
  })
})

app.listen(PORT, () => {
  console.log(`Server is running at ${HOST}:${PORT}.`)
})