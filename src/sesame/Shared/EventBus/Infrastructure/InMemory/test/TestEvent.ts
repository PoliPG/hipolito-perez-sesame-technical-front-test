import type { Event } from '../../../Domain/Event'

export class TestEvent implements Event {
  private _text: string

  constructor(text: string) {
    this._text = text
  }

  get text() {
    return this._text
  }

  getName(): string {
    return this.constructor.name
  }
}
