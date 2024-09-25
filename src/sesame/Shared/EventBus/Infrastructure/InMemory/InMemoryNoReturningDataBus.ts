import { injectable } from 'inversify'
import type { Event } from '../../Domain/Event'
import type { Handler, SubscriberHandler } from '../../Domain/Handler'
import type { NoReturningDataBus, Registry } from '../../Domain/Bus'

class SubscriberMap extends Map<string, SubscriberHandler[]> {}

@injectable()
export class InMemoryNoReturningDataBus implements NoReturningDataBus {
  private subscribers: SubscriberMap
  private static nextId = 0

  constructor() {
    this.subscribers = new SubscriberMap()
  }

  public async dispatch(event: Event): Promise<void> {
    const eventSuscribers = this.getSubscribers(event.getName())

    if (eventSuscribers === undefined) {
      throw new Error('Not suscriber found')
    }

    for (let i = 0; i <= eventSuscribers.length; i++) {
      await eventSuscribers[i].handler.handle(event)
    }
  }

  public register(eventKey: string, handler: Handler): Registry {
    const id = this.getNextId()
    const subscriber = this.getSubscribers(eventKey)

    if (!subscriber) this.subscribers.set(eventKey, [{ id, handler }])
    else {
      subscriber.push({ id, handler })
    }

    return {
      unregister: () => {
        const callables = this.getSubscribers(eventKey)!.filter((callable) => callable.id !== id)
        this.subscribers.delete(eventKey)
        if (callables.length > 0) this.subscribers.set(eventKey, callables)
      }
    }
  }

  private getSubscribers(event: string): SubscriberHandler[] | undefined {
    return this.subscribers.get(event)
  }

  private getNextId(): number {
    return InMemoryNoReturningDataBus.nextId++
  }
}
