import type { HttpConnection } from '@/sesame/Shared/Http/Domain/HttpConnection'
import type { VacancyRepository } from '../../Domain/VacancyRepository'
import { APIMapperVacancyState } from './DTO/APIMapperVacancyState'
import type { APIVacancyStateDTO } from './DTO/APIVacancyStateDTO'
import type { VacancyState } from '../../Domain/VacancyState'
import { injectable } from 'inversify'

@injectable()
export class APIVacancyRepository implements VacancyRepository {
  constructor(private httpConnection: HttpConnection) {}

  /**
   * Find states for a concrete vacancy
   */
  async findVacancyStates(vacancyID: number): Promise<VacancyState[]> {
    const url = `/recruitment/v1/candidate-status/${vacancyID}`
    const apiCandidates = await this.httpConnection.get<APIVacancyStateDTO[]>(url)

    if (apiCandidates.length === 0) return []
    return apiCandidates.map((dto) => APIMapperVacancyState.createFromDTO(dto))
  }
}
