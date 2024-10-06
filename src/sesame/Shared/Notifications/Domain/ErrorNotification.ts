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

  public hasErrors(): boolean {
    return this.errors.length > 0
  }

  invalid(): this is ErrorNotification {
    return true
  }
}
