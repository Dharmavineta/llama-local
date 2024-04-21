"use server";
import { Ollama } from "@langchain/community/llms/ollama";

export const getData = async () => {
  const model = new Ollama({
    model: "llama3",
  });

  const response = await model.stream(
    "Explain in detail the process of photosynthesis"
  );

  for await (const chunk of response) {
    console.log(chunk);
  }
};
