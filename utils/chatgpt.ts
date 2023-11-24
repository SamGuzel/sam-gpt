import openAi from "openai";

const openai = new openAi({
  apiKey: process.env.OPENAI_API_KEY,
});
export default openai;
