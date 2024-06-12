// import express from "express"
import express, { json } from "express";
import dotenv from "dotenv";
import homeRoute from './routes/home.js';
import registerRoute from './routes/register.js'
import aboutRoute from "./routes/about.js"
import loginRoute from './routes/login.js'
import path from "path";
import { fileURLToPath } from "url";
import mongoose from "mongoose"
// import homePage from './views/home.ejs'

let connect = async() => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("connected to the data base");
    }catch(err){
        throw err;
    }
}

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename);



console.log(__dirname);
dotenv.config();


const port = process.env.PORT || 4000;
const app = express();


app.set("view engine", "ejs");
app.use(json());
app.use(express.static(path.join(__dirname, "public")));
//middlewares.
app.use("/api/home", homeRoute);
app.use("/api/register", registerRoute);
app.use("/api/login", loginRoute);
app.use("/api", aboutRoute);

//error handling middleware
app.use((err, req, res, next) => {
    const errStatus = err.status || 500;
    const errMessage = err.message || "Something went wrong";
    res.status(errStatus).json({
        success: false,
        status: errStatus,
        message: errMessage,
        stack: err.stack
    })
})


app.listen(port,() => {
    connect();
     console.log(`https://localhost:${port}`)
});