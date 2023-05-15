import express from "express";
import connectDB from "./mongoDB/db.js";
import  dotenv from "dotenv";
const PORT = process.env.PORT || 5000
dotenv.config()
const app = express()

app.get(`/`,(request,response)=>{response.send("Hi")})


const startServer = async()=> {
    try {
        connectDB(process.env.mongo_url)
        app.listen(PORT,()=>{console.log(`listening at http://localhost:${PORT}`)})
        
    } catch (error) {
        
    }
}
startServer()