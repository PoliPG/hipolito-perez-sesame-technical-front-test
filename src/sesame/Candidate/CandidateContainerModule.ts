import type { interfaces } from 'inversify'
import { ContainerModule } from '../Shared/IocContainer/Infrastructure/ContainerModule'
import type { CandidateRepository } from './Domain/CandidateRepository'
import CandidateContainerTypes from './CandidateContainerTypes'
import { APICandidateRepository } from './Infrastructure/API/APICandidateRepository'
import type { IocContainer } from '../Shared/IocContainer/Infrastructure/Container'
import type { Handler } from '../Shared/EventBus/Domain/Handler'
import type { ReturningDataBus } from '../Shared/EventBus/Domain/Bus'
import EventBusContainerTypes from '../Shared/EventBus/EventBusContainerTypes'
import { GetVacancyCandidatesQuery } from './Application/get-vacancy-candidates/GetVacancyCandidatesQuery'
import { GetVacancyCandidatesQueryHandler } from './Application/get-vacancy-candidates/GetVacancyCandidatesQueryHandler'
import { CreateCandidateRequestHandler } from './Application/create-candidate/CreateCandidateRequestHandler'
import { CreateCandidateRequest } from './Application/create-candidate/CreateCandidateRequest'
import { UpdateCandidateRequestHandler } from './Application/update-candidate/UpdateCandidateRequestHandler'
import { UpdateCandidateRequest } from './Application/update-candidate/UpdateCandidateRequest'

export class CandidateContainerModule extends ContainerModule {
  constructor() {
    super((bind: interfaces.Bind) => {
      bind<CandidateRepository>(CandidateContainerTypes.CandidateRepository).to(
        APICandidateRepository
      )
      bind<Handler>(CandidateContainerTypes.GetVacancyCandidatesQueryHandler)
        .to(GetVacancyCandidatesQueryHandler)
        .inSingletonScope()

      bind<Handler>(CandidateContainerTypes.CreateCandidateRequestHandler)
        .to(CreateCandidateRequestHandler)
        .inSingletonScope()

      bind<Handler>(CandidateContainerTypes.UpdateCandidateRequestHandler)
        .to(UpdateCandidateRequestHandler)
        .inSingletonScope()
    })
  }

  init(container: IocContainer): void {
    const queryBus = container.get<ReturningDataBus>(EventBusContainerTypes.QueryBus)
    const requestBus = container.get<ReturningDataBus>(EventBusContainerTypes.RequestBus)

    queryBus.register(
      GetVacancyCandidatesQuery.name,
      container.get<Handler>(CandidateContainerTypes.GetVacancyCandidatesQueryHandler)
    )

    requestBus.register(
      CreateCandidateRequest.name,
      container.get<Handler>(CandidateContainerTypes.CreateCandidateRequestHandler)
    )

    requestBus.register(
      UpdateCandidateRequest.name,
      container.get<Handler>(CandidateContainerTypes.UpdateCandidateRequestHandler)
    )
  }
}
