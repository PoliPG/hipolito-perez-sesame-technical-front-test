import type { interfaces } from 'inversify'
import { ContainerModule } from '../Shared/IocContainer/Infrastructure/ContainerModule'
import type { VacancyRepository } from './Domain/VacancyRepository'
import { APIVacancyRepository } from './Infrastructure/API/APIVacancyRepository'
import VacancyContainerTypes from './VacancyContainerTypes'
import type { Handler } from '../Shared/EventBus/Domain/Handler'
import { GetVacancyCandidateStatusQueryHandler } from './Application/get-vacancy-candidate-status/GetVacancyCandidateStatusQueryHandler'
import type { IocContainer } from '../Shared/IocContainer/Infrastructure/Container'
import type { ReturningDataBus } from '../Shared/EventBus/Domain/Bus'
import EventBusContainerTypes from '../Shared/EventBus/EventBusContainerTypes'
import { GetVacancyCandidateStatusQuery } from './Application/get-vacancy-candidate-status/GetVacancyCandidateStatusQuery'

export class VacancyContainerModule extends ContainerModule {
  constructor() {
    super((bind: interfaces.Bind) => {
      bind<VacancyRepository>(VacancyContainerTypes.VacancyRepository).to(APIVacancyRepository)

      bind<Handler>(VacancyContainerTypes.GetVacancyCandidateStatusQueryHandler)
        .to(GetVacancyCandidateStatusQueryHandler)
        .inSingletonScope()
    })
  }

  init(container: IocContainer): void {
    const queryBus = container.get<ReturningDataBus>(EventBusContainerTypes.QueryBus)

    queryBus.register(
      GetVacancyCandidateStatusQuery.name,
      container.get<Handler>(VacancyContainerTypes.GetVacancyCandidateStatusQueryHandler)
    )
  }
}
