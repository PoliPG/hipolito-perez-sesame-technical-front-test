import { type interfaces } from 'inversify'
import type { HttpConnection } from './Domain/HttpConnection'
import AxiosHttpConnection from './Infrastructure/AxiosHttpConnection'
import HttpContainerTypes from './HttpContainerTypes'
import { ContainerModule } from '../IocContainer/Infrastructure/ContainerModule'

export class HttpContainerModule extends ContainerModule {
  constructor() {
    super((bind: interfaces.Bind) => {
      // Set environment data
      const sesameUrl: string = import.meta.env.VITE_SESAME_API_URL
      const apiToken: string = import.meta.env.VITE_SESAME_API_TOKEN
      const sesameHttpConnection = new AxiosHttpConnection(sesameUrl, apiToken)

      bind<HttpConnection>(HttpContainerTypes.BackendHttpConnection).toConstantValue(
        sesameHttpConnection
      )
    })
  }
}
