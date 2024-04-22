// import { StreamingTextResponse, Message } from "ai";
// import { AIMessage, HumanMessage } from "@langchain/core/messages";
// import { Ollama } from "@langchain/community/llms/ollama";
// import OpenAI from "openai";

// import { BytesOutputParser } from "@langchain/core/output_parsers";

// export const runtime = "edge";

// export async function POST(req: Request) {
//   const { messages } = await req.json();

//   console.log(messages);

//   const model = new Ollama({
//     model: "llama3",
//   });

//   const parser = new BytesOutputParser();

//   const stream = await model
//     .pipe(parser)
//     .stream(
//       (messages as Message[]).map((m) =>
//         m.role == "user"
//           ? new HumanMessage(m.content)
//           : new AIMessage(m.content)
//       )
//     );

//   return new StreamingTextResponse(stream);
// }

import { ollama, streamText } from "modelfusion";

export async function POST(req: Request) {
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
}
