import type { Handler } from '../../../Domain/Handler'
import type { TestEvent } from './TestEvent'

export class TestHandler implements Handler {
  async handle(event: TestEvent): Promise<string> {
    return await event.testString
  }
}
