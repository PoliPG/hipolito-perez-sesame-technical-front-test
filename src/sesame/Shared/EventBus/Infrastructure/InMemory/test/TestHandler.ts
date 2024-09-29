import type { Handler } from '../../../Domain/Handler'
import type { TestEvent } from './TestEvent'
import { EntityTest } from './EntityTest'

export class TestHandler implements Handler {
  async handle(event: TestEvent): Promise<string> {
    EntityTest.text = 'testing'
    return await event.text
  }
}
