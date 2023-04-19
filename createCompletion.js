import { openai } from './api.js'

async function createCompletion() {
  try {
    const response = await openai.createCompletion({
      model: 'davinci:ft-personal-2023-03-30-05-34-36',
      prompt: 'What is your name?',
      max_tokens: 10
    })
    if (response.data) {
      console.log('choices: ', response.data.choices[0])
    }
  } catch (err) {
    console.log('err: ', err)
  }
}

createCompletion()