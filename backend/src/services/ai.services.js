import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyAsRKRvBhE4em-MqsrHHyxVrQ1xe3D-toQ");
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

 export const getData = async () => {
    const prompt = `
    import express from "express";
    const app = express();
    
    app.get("/", async(req, res) => {
        const data = await getData();
        res.send("QUESTION: How are you today? <br> Answer: " + data);
    });

    export default app;
    Review this code.
    `;
    const result = await model.generateContent(prompt);
    return result.response.text();
};

