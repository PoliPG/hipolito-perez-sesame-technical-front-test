import type { interfaces } from 'inversify'
import { ContainerModule } from '../Shared/IocContainer/Infrastructure/ContainerModule'
import type { CandidateRepository } from './Domain/CandidateRepository'
import CandidateContainerTypes from './CandidateContainerTypes'
import { APICandidateRepository } from './Infrastructure/API/APICandidateRepository'
import type { IocContainer } from '../Shared/IocContainer/Infrastructure/Container'

export class CandidateContainerModule extends ContainerModule {
  constructor() {
    super((bind: interfaces.Bind) => {
      bind<CandidateRepository>(CandidateContainerTypes.CandidateRepository).to(
        APICandidateRepository
      )
    })
  }

  init(container: IocContainer): void {}
}
