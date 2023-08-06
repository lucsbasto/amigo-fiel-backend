export class SignUpController {
  handle (httpRequest: any): any {
    const httpResponse = {
      statusCode: 400,
      body: new Error('Missing param: name')
    }
    return httpResponse
  }
}
