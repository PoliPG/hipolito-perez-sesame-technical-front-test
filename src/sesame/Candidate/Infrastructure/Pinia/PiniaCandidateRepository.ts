import type { Candidate } from '../../Domain/Candidate'
import type {
  CandidateRepository,
  CreateCandidateParams,
  UpdateCandidateParams
} from '../../Domain/CandidateRepository'
import { injectable } from 'inversify'
import { usePiniaCandidateStore } from '@/sesame/Candidate/Infrastructure/Pinia/PiniaCandidateStore'
import { VacancyCandidateDTO } from '../../Application/get-vacancy-candidates/VacancyCandidateDTO'

@injectable()
export class PiniaCandidateRepositoryDecorator implements CandidateRepository {
  constructor(private candidateRepository: CandidateRepository) {}

  async findCandidatesByVacancyId(vacancyId: string): Promise<Candidate[]> {
    const candidates = await this.candidateRepository.findCandidatesByVacancyId(vacancyId)
    usePiniaCandidateStore().setCandidates(
      candidates.map((candidate) => new VacancyCandidateDTO(candidate))
    )
    return candidates
  }

  async createCandidate(params: CreateCandidateParams): Promise<Candidate> {
    const candidate = await this.candidateRepository.createCandidate(params)
    usePiniaCandidateStore().newCandidate(new VacancyCandidateDTO(candidate))
    return candidate
  }

  async updateCandidate(params: UpdateCandidateParams): Promise<Candidate> {
    const candidate = await this.candidateRepository.updateCandidate(params)
    usePiniaCandidateStore().updateCandidate(new VacancyCandidateDTO(candidate))
    return candidate
  }
}
