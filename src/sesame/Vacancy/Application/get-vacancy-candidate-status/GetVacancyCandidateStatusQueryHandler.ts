import type { Handler } from '@/sesame/Shared/EventBus/Domain/Handler'
import type { GetVacancyCandidateStatusQuery } from './GetVacancyCandidateStatusQuery'
import type { VacancyCandidateStatusDTO } from './VacancyCandidateStatusDTO'
import type { VacancyRepository } from '../../Domain/VacancyRepository'
import type { VacancyCandidateStatus } from '../../Domain/VacancyCandidateStatus'

export class GetVacancyCandidateStatusQueryHandler implements Handler {
  constructor(private vacancyRepository: VacancyRepository) {}

  async handle(query: GetVacancyCandidateStatusQuery): Promise<VacancyCandidateStatusDTO[]> {
    const candidateStatus = await this.vacancyRepository.findCandidateStatusByVacancy(
      query.vacancyId
    )
    return candidateStatus.map((candidateState) => this.getDTO(candidateState))
  }

  private getDTO(candidateStatus: VacancyCandidateStatus): VacancyCandidateStatusDTO {
    return {
      id: candidateStatus.id,
      name: candidateStatus.name,
      order: candidateStatus.order
    }
  }
}
