import type { HttpConnection } from '@/sesame/Shared/Http/Domain/HttpConnection'
import type { APIDTO } from '@/sesame/Shared/Http/Infrastructure/APIDTO'
import type { VacancyRepository } from '../../Domain/VacancyRepository'
import { APIMapperVacancyCandidateStatus } from './DTO/APIMapperVacancyCandidateStatus'
import type { APIVacancyCandidateStatusDTO } from './DTO/APIVacancyCandidateStatusDTO'
import type { VacancyCandidateStatus } from '../../Domain/VacancyCandidateStatus'
import { injectable, inject } from 'inversify'
import HttpContainerTypes from '@/sesame/Shared/Http/HttpContainerTypes'

@injectable()
export class APIVacancyRepository implements VacancyRepository {
  constructor(
    @inject(HttpContainerTypes.BackendHttpConnection)
    private backendHttpConnection: HttpConnection
  ) {}

  /**
   * Find status for a concrete vacancy
   */
  async findCandidateStatusByVacancy(vacancyID: string): Promise<VacancyCandidateStatus[]> {
    const url = `/recruitment/v1/candidate-status/${vacancyID}`
    const apiCandidates =
      await this.backendHttpConnection.get<APIDTO<APIVacancyCandidateStatusDTO[]>>(url)

    if (apiCandidates.data.length === 0) return []
    return apiCandidates.data.map((dto) => APIMapperVacancyCandidateStatus.createFromDTO(dto))
  }
}
