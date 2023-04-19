import { Configuration, OpenAIApi } from 'openai'

const configuration = new Configuration({
  apiKey: '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'
})

export const openai = new OpenAIApi(configuration)