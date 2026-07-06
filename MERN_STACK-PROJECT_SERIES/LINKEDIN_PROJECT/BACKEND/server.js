import express from "express"
import dotenv from "dotenv"
import ConnectDB from "./utils/ConnectDB.js"
import cookieParser from "cookie-parser";
dotenv.config({
    path:"./.env"
})
const app=express();

// dotenv access
const PORT= process.env.PORT

// middlewares
app.use(express.json());
// express.json is used to 

app.use(cookieParser());
app.use(cors({
    origin:"http//local"
}))
app.use(express.urlencoded({extended:true}))
app.listen(PORT,(req,res)=>{
    ConnectDB()
    console.log(`Server running at port ${PORT}`)
})
