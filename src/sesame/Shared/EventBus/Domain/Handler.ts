import type { Event } from './Event'

export interface Handler {
  handle(event: Event): Promise<any>
}

export interface SubscriberHandler {
  id: number
  handler: Handler
}
