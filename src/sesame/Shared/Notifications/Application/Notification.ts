import type { ErrorNotification } from './ErrorNotification'

export interface Notification {
  message: string
  isError(): this is ErrorNotification
}

export class NotificationBase implements Notification {
  private _message: string

  constructor(message: string) {
    this._message = message
  }

  get message(): string {
    return this._message
  }

  public isError(): this is ErrorNotification {
    return false
  }
}
