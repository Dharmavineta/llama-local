"use server";
import { Ollama } from "@langchain/community/llms/ollama";
import ollama from "ollama";

export const getData = async () => {
  const model = new Ollama({
    model: "llama3",
  });

  const response = await model.stream(
    "What is generics in typescript? Explain very briefly"
  );

  const chunks = [];
  for await (const chunk of response) {
    chunks.push(chunk);
    console.log(chunk);
  }
};
