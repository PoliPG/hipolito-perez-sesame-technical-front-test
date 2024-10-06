import { type interfaces } from 'inversify'
import { ContainerModule } from '../IocContainer/Infrastructure/ContainerModule'
import type { ReturningDataBus } from './Domain/Bus'
import EventBusContainerTypes from './EventBusContainerTypes'
import { InMemoryReturningDataBus } from './Infrastructure/InMemory/InMemoryReturningDataBus'

class EventBusContainerModule extends ContainerModule {
  constructor() {
    super((bind: interfaces.Bind) => {
      bind<ReturningDataBus>(EventBusContainerTypes.QueryBus)
        .to(InMemoryReturningDataBus)
        .inSingletonScope()

      bind<ReturningDataBus>(EventBusContainerTypes.RequestBus)
        .to(InMemoryReturningDataBus)
        .inSingletonScope()
    })
  }
}

export { EventBusContainerModule }
