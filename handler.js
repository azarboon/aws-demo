
export async function hello() {
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ message: 'hello world' }),
  }
}

// Having above function as sample, please make this function to return your name
export async function name() {
  return null
}