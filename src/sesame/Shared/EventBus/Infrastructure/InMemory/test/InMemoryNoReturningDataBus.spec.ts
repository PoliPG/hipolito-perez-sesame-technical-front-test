import 'reflect-metadata'
import { expect, test } from 'vitest'
import { InMemoryNoReturningDataBus } from '../InMemoryNoReturningDataBus'
import { TestEvent } from './TestEvent'
import { TestHandler } from './TestHandler'
import { EntityTest } from './EntityTest'

test('Test basic event', async () => {
  //Arrange
  const event = new TestEvent('Holaa')
  const handler = new TestHandler()
  const bus = new InMemoryNoReturningDataBus()
  bus.register(TestEvent.name, handler)

  //Act
  await bus.dispatch(event)

  //Assert
  expect(EntityTest.text).toBe('testing')
})
