"use server";
import { Ollama } from "@langchain/community/llms/ollama";
import { ollama, streamText } from "modelfusion";

export const getData = async (question: string) => {
  const model = new Ollama({
    model: "llama3",
  });
  const textStream = await streamText({
    model: ollama
      .CompletionTextGenerator({
        model: "llama3",
        promptTemplate: ollama.prompt.Mistral,
        raw: true, // required when using custom prompt template
        maxGenerationTokens: 500,
      })
      .withTextPrompt(),

    prompt: "Write a short story about a robot learning to love:",
  });

  for await (const textPart of textStream) {
    process.stdout.write(textPart);
  }
};
