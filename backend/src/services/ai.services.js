import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyAsRKRvBhE4em-MqsrHHyxVrQ1xe3D-toQ");
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

 export const getData = async () => {
    const prompt = `
    can you review my code
    `;
    const result = await model.generateContent(prompt);
    console.log(result.response.text())
    return result.response.text();
};

