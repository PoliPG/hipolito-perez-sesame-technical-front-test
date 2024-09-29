// sum.test.js
import 'reflect-metadata'
import { expect, test } from 'vitest'
import { InMemoryReturningDataBus } from '../InMemoryReturningDataBus'
import { TestEvent } from './TestEvent'
import { TestHandler } from './TestHandler'

test('Test basic event', async () => {
  //Arrange
  const event = new TestEvent('Holaa')
  const handler = new TestHandler()
  const bus = new InMemoryReturningDataBus()
  bus.register(TestEvent.name, handler)

  //Act
  const test = await bus.dispatch<string>(event)

  //Assert
  expect(test).toBe(event.text)
})
