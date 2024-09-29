import { ContainerModule as InversifyContainerModule } from 'inversify'
import type { IocContainer } from './Container'

export class ContainerModule extends InversifyContainerModule {
  init(container: IocContainer): void {}
}
