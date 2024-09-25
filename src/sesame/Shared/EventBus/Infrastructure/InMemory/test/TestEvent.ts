import type { Event } from '../../../Domain/Event'

export class TestEvent implements Event {
  testString = 'hola'

  getName(): string {
    return this.constructor.name
  }
}
