import type { ErrorNotification } from './ErrorNotification'

export interface Notification {
  message: string
  isError(): this is ErrorNotification
  setMessage(message: string): void
}

export class NotificationBase implements Notification {
  private _message: string

  constructor(message: string) {
    this._message = message
  }

  setMessage(message: string): void {
    this._message = message
  }

  get message(): string {
    return this._message
  }

  public isError(): this is ErrorNotification {
    return false
  }
}
