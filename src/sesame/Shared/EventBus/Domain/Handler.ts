export interface Handler {
  handle(event: Event): Promise<any>
}

export interface SuscriberHandler {
  id: number
  handler: Handler
}
