import { Configuration, OpenAIApi } from "openai";
// require("dotenv").config();

const config = new Configuration({
  apiKey: "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",
});

const openAI = new OpenAIApi(config);

export default openAI;
