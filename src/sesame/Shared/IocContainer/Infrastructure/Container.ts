import { Container as InversifyContainer } from 'inversify'
import type { ContainerModule } from './ContainerModule'
import { VacancyContainerModule } from '@/sesame/Vacancy/VacancyContainerModule'

class IocContainer extends InversifyContainer {
  private static instance: IocContainer | null = null
  private modules: ContainerModule[] = []

  constructor() {
    super()
    this.modules = [new VacancyContainerModule()]

    this.load(...this.modules)
    this.modules.forEach((module) => {
      module.init(this)
    })
  }

  static getInstance(): IocContainer {
    if (IocContainer.instance !== null) return IocContainer.instance
    IocContainer.instance = new IocContainer()
    return IocContainer.instance
  }
}
export * from 'inversify'
export { IocContainer }
