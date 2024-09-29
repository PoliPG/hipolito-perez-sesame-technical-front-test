import type { interfaces } from 'inversify'
import { ContainerModule } from '../Shared/IocContainer/Infrastructure/ContainerModule'
import type { VacancyRepository } from './Domain/VacancyRepository'
import { APIVacancyRepository } from './Infrastructure/API/APIVacancyRepository'
import VacancyContainerTypes from './VacancyContainerTypes'
import type { Handler } from '../Shared/EventBus/Domain/Handler'
import { GetVacancyCandidateStatusQueryHandler } from './Application/get-vacancy-candidate-status/GetVacancyCandidateStatusQueryHandler'

export class VacancyContainerModule extends ContainerModule {
  constructor() {
    super((bind: interfaces.Bind) => {
      bind<VacancyRepository>(VacancyContainerTypes.VacancyRepository)
        .to(APIVacancyRepository)
        .inSingletonScope()

      bind<Handler>(VacancyContainerTypes.GetVacancyCandidateStatusQueryHandler)
        .to(GetVacancyCandidateStatusQueryHandler)
        .inSingletonScope()
    })
  }
}
