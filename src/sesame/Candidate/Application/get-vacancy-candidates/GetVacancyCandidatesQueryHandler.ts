import type { Handler } from '@/sesame/Shared/EventBus/Domain/Handler'
import { inject, injectable } from 'inversify'
import CandidateContainerTypes from '../../CandidateContainerTypes'
import type { CandidateRepository } from '../../Domain/CandidateRepository'
import type { GetVacancyCandidatesQuery } from './GetVacancyCandidatesQuery'
import { VacancyCandidateDTO } from './VacancyCandidateDTO'

@injectable()
export class GetVacancyCandidatesQueryHandler implements Handler {
  constructor(
    @inject(CandidateContainerTypes.CandidateRepository)
    private candidateRepository: CandidateRepository
  ) {}

  async handle(query: GetVacancyCandidatesQuery): Promise<VacancyCandidateDTO[]> {
    const candidates = await this.candidateRepository.findCandidatesByVacancyId(query.vacancyId)
    return candidates.map((candidate) => new VacancyCandidateDTO(candidate).getPrimitives())
  }
}
