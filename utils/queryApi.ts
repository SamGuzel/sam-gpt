import openai from "./chatgpt";

const query = async (prompt: string, chatId: string, model: string) => {
  const response = await openai.completions
    .create({
      model,
      prompt,
      temperature: 0.9,
      top_p: 1,
      max_tokens: 1000,
      frequency_penalty: 0,
      presence_penalty: 0,
    })
    .then((res: any) => res.choices[0].text)
    .catch(
      (err: any) => `SamGPT was unable to find an answer for that!, ${err}`
    );

  return response;
};

export default query;
