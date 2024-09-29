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
import AxiosHttpConnection from '../Shared/Http/Infrastructure/AxiosHttpConnection'

export class VacancyContainerModule extends ContainerModule {
  constructor() {
    super((bind: interfaces.Bind) => {
      // Set environment data
      const sesameUrl: string = import.meta.env.SESAME_API_URL
      const apiToken: string = import.meta.env.SESAME_API_TOKEN
      const sesameHttpConnection = new AxiosHttpConnection(sesameUrl, apiToken)

      const VacancyRepository = new APIVacancyRepository(sesameHttpConnection)
      bind<VacancyRepository>(VacancyContainerTypes.VacancyRepository).toConstantValue(
        VacancyRepository
      )

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
