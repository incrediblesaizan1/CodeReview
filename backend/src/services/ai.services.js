import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyAsRKRvBhE4em-MqsrHHyxVrQ1xe3D-toQ");
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

 export const getData = async (question = "ask me hello how are you") => {
    const prompt = `${question}`
    const result = await model.generateContent(prompt);
    console.log(result.response.text())
    return result.response.text();
};

