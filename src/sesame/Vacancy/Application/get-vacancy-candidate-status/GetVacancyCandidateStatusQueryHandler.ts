import type { Handler } from '@/sesame/Shared/EventBus/Domain/Handler'
import type { GetVacancyCandidateStatusQuery } from './GetVacancyCandidateStatusQuery'
import { VacancyCandidateStatusDTO } from './VacancyCandidateStatusDTO'
import type { VacancyRepository } from '../../Domain/VacancyRepository'
import type { VacancyCandidateStatus } from '../../Domain/VacancyCandidateStatus'
import VacancyContainerTypes from '../../VacancyContainerTypes'
import { inject, injectable } from 'inversify'

@injectable()
export class GetVacancyCandidateStatusQueryHandler implements Handler {
  constructor(
    @inject(VacancyContainerTypes.VacancyRepository) private vacancyRepository: VacancyRepository
  ) {}

  async handle(query: GetVacancyCandidateStatusQuery): Promise<VacancyCandidateStatusDTO[]> {
    const candidateStatuses = await this.vacancyRepository.findCandidateStatusByVacancy(
      query.vacancyId
    )
    return candidateStatuses.map((candidateStatus) => this.getDTO(candidateStatus))
  }

  private getDTO(candidateStatus: VacancyCandidateStatus): VacancyCandidateStatusDTO {
    return new VacancyCandidateStatusDTO(
      candidateStatus.id,
      candidateStatus.name,
      candidateStatus.order
    )
  }
}
