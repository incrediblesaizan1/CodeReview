import express from "express";
const app = express();
import {getData} from "./services/ai.services.js"

app.get("/", async(req, res) => {
    const data = await getData()
    res.json(data)
});

export default app;
