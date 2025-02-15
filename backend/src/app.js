import express from "express";
const app = express();
import {getData} from "./services/ai.services.js"
import cors from "cors"

const allowedOrigins = [
    "http://localhost:5173",
    "https://incrediblesaizan1-travel-stories.vercel.app",
  ];

app.use(express.json());
app.use(
    cors({
      origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
          callback(null, true);
        } else {
          callback(new Error("Not allowed by CORS"));
        }
      },
      credentials: true, 
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], 
      allowedHeaders: ["Content-Type", "Authorization"], 
    })
  );


app.get("/", async(req, res) => {
   res.send("hello")
});

app.post("/",async(req,res)=>{
    const question = req.body.code
    const data = await getData(question) 
    res.send(data)
})


export default app;
