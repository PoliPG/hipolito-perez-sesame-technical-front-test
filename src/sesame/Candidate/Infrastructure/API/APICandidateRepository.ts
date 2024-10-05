import type { HttpConnection } from '@/sesame/Shared/Http/Domain/HttpConnection'
import type { Candidate } from '../../Domain/Candidate'
import type { CandidateRepository } from '../../Domain/CandidateRepository'
import { injectable, inject } from 'inversify'
import HttpContainerTypes from '@/sesame/Shared/Http/HttpContainerTypes'
import type { ApiCandidateDTO } from './DTO/APICandidateDTO'
import type { APIDTO } from '@/sesame/Shared/Http/Infrastructure/APIDTO'
import { APICandidateMapper } from './DTO/APICandidateMapper'

@injectable()
export class APICandidateRepository implements CandidateRepository {
  constructor(
    @inject(HttpContainerTypes.BackendHttpConnection)
    private backendHttpConnection: HttpConnection
  ) {}

  async findCandidatesByVacancyId(vacancyId: string): Promise<Candidate[]> {
    const url = `/recruitment/v1/vacancies/${vacancyId}/candidates`
    const apiCandidates = await this.backendHttpConnection.get<APIDTO<ApiCandidateDTO[]>>(url)

    if (apiCandidates.data.length === 0) return []
    return apiCandidates.data.map((dto) => APICandidateMapper.createFromDTO(dto))
  }

  createCandidate(candidate: Candidate): Promise<void> {
    throw new Error('Method not implemented.')
  }

  updateCandidate(candidate: Candidate): Promise<void> {
    throw new Error('Method not implemented.')
  }
}
