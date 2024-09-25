import { injectable } from 'inversify'
import type { Handler, SubscriberHandler } from '../../Domain/Handler'
import type { Event } from '../../Domain/Event'
import type { Registry, ReturningDataBus } from '../../Domain/Bus'

class SubscriberMap extends Map<string, SubscriberHandler[]> {}

@injectable()
export class InMemoryReturningDataBus implements ReturningDataBus {
  private subscribers: SubscriberMap
  private static nextId = 0

  constructor() {
    this.subscribers = new SubscriberMap()
  }

  public async dispatch<T extends object>(event: Event): Promise<T> {
    const messageSubscribers = this.getSubscribers(event.getName())

    if (messageSubscribers === undefined) {
      throw new Error('Not subscriber found')
    }

    return messageSubscribers[0].handler.handle(event)
  }

  public register(eventKey: string, handler: Handler): Registry {
    const id = this.getNextId()
    const subscriber = this.getSubscribers(eventKey)

    if (subscriber) throw new Error('There is a suscriber')

    this.subscribers.set(eventKey, [{ id, handler }])

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
    return InMemoryReturningDataBus.nextId++
  }
}
