import axios from 'axios'

export default class {

  static async call() {

    const response = await axios(`https://httpbin.org/uuid`)
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'text/plain'
      },
      body: `Got a result: ${response.data.uuid}`,
    }
  }

}