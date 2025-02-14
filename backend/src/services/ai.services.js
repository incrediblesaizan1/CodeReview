import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyAsRKRvBhE4em-MqsrHHyxVrQ1xe3D-toQ");
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

 export const getData = async () => {
    const prompt = `
    how are you today
    `;
    const result = await model.generateContent(prompt);
    return result.response.text();
};

