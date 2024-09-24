import { ContainerModule as InversifyContainerModule } from 'inversify'
import type { IocContainer } from './Container'

export abstract class ContainerModule extends InversifyContainerModule {
  init(container: IocContainer): void {}
}
