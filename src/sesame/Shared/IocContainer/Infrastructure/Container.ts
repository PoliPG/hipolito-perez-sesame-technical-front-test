import { Container as InversifyContainer } from 'inversify'
import type { ContainerModule } from './ContainerModule'
import { VacancyContainerModule } from '@/sesame/Vacancy/VacancyContainerModule'
import { EventBusContainerModule } from '../../EventBus/EventBusContainerModule'

class IocContainer extends InversifyContainer {
  private static instance: IocContainer
  private modules: ContainerModule[]

  private constructor() {
    super()
    this.modules = [new EventBusContainerModule(), new VacancyContainerModule()]

    this.load(...this.modules)
    this.modules.forEach((module) => {
      module.init(this)
    })
  }

  static getInstance(): IocContainer {
    if (typeof IocContainer.instance !== 'undefined') return IocContainer.instance
    IocContainer.instance = new IocContainer()
    return IocContainer.instance
  }
}
export * from 'inversify'
export { IocContainer }
