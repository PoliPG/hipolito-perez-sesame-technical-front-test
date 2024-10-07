import { NotificationBase, type Notification } from './Notification'

export interface NotificationError {
  id: string
  message: string
}

export class ErrorNotification extends NotificationBase implements Notification {
  private errors: NotificationError[] = []

  constructor(message: string) {
    super(message)
  }

  public addError(error: NotificationError): void {
    this.errors.push(error)
  }

  public getErrors(): NotificationError[] {
    return this.errors
  }

  isError(): this is ErrorNotification {
    return true
  }
}
