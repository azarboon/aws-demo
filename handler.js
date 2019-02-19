import axios from 'axios'


export async function hello() {
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/plain'
    },
    body: `Congrats. You just called your first Serverless function`,
  }
}

export async function call() {

  const response = await axios(`https://httpbin.org/uuid`)
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/plain'
    },
    body: `Got a result: ${response.data.uuid}`,
  }
}