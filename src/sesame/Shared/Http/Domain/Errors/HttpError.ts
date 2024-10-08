export class HttpError extends Error {
  private code: number
  private cause: Error

  constructor(message: string, code: number, cause: Error) {
    super(message)
    this.cause = cause
    this.code = code
  }

  static createFromCode(code: number, error: Error): HttpError {
    switch (code) {
      case 404:
        return new HttpError('Item not found.', code, error)
      default:
        return new HttpError(`Error with status code: ${code}`, code, error)
    }
  }
}
