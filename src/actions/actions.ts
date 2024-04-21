"use server";
import { Ollama } from "@langchain/community/llms/ollama";
import ollama from "ollama";

export const getData = async (question: string) => {
  const model = new Ollama({
    model: "llama3",
  });

  const response = await model.invoke(
    `You're a sentiment analsis AI, you'll analyse this text ${question} and give detailed sentiment analysis. Don't indulge in unnecessary jargon, be very professional. You'll first categorise the input as either negitive or positive and after that give a very brief explanation for why you think it's negtive or positive`
  );

  return response;
};
