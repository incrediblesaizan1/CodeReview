import {GoogleGenerativeAI} from "@google/generative-ai"

const genAI = new GoogleGenerativeAI("AIzaSyAsRKRvBhE4em-MqsrHHyxVrQ1xe3D-toQ");
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

const prompt = "hello how are you";

const result = await model.generateContent(prompt);

console.log(result.response.text());