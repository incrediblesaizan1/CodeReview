import express from "express";
const app = express();
import {getData} from "./services/ai.services.js"


app.use(express.json());


app.get("/", async(req, res) => {
   res.send("hello")
});

app.post("/",async(req,res)=>{
    const question = req.body.code
    const data = await getData(question) 
    res.send(data)
})


export default app;
