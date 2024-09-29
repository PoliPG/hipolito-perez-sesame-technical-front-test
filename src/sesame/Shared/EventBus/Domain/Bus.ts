import type { Event } from './Event'
import type { Handler, SubscriberHandler } from './Handler'

export interface Registry {
  unregister: () => void
}

export interface Bus {
  register(event: string, callback: Handler): Registry
}

export interface NoReturningDataBus extends Bus {
  dispatch(command: Event): Promise<void>
}

export interface ReturningDataBus extends Bus {
  dispatch<T extends object>(query: Event): Promise<T>
}
