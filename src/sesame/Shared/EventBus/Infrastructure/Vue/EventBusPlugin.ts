import type { App, InjectionKey } from 'vue'
import { IocContainer } from '@/sesame/Shared/IocContainer/Infrastructure/Container'
import type { ReturningDataBus } from '../../Domain/Bus'
import EventBusContainerTypes from '../../EventBusContainerTypes'

const QueryBusKey = Symbol() as InjectionKey<ReturningDataBus>

class EventBusPluginVue {
  install(app: App) {
    const queryBus = IocContainer.getInstance().get<ReturningDataBus>(
      EventBusContainerTypes.QueryBus
    )
    // configure the app
    app.provide(QueryBusKey, queryBus)
  }
}

export { EventBusPluginVue, QueryBusKey }
