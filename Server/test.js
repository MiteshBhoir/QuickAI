import { GoogleGenerativeAI } from "@google/generative-ai";
import 'dotenv/config'
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY); 
console.log(process.env.GEMINI_API_KEY)
async function main() {
  try {
    console.log("started");

    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash",
    });

    const result = await model.generateContent(
      "Explain AI in 20 words"
    );

    console.log("ended");
    console.log(result.response.text());
  } catch (error) {
    console.error(error);
  }
}

main();