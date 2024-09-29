import type { HttpConnection } from '@/sesame/Shared/Http/Domain/HttpConnection'
import type { VacancyRepository } from '../../Domain/VacancyRepository'
import { Candidate } from '@/sesame/Candidate/Domain/Candidate'
import type { VacancyState } from '../../Domain/VacancyState'
import type { ApiCandidateDTO } from './DTO/APICandidateDTO'

export class APIVacancyRepository implements VacancyRepository {
  constructor(private httpConnection: HttpConnection) {}
  async findVacancyCandidates(vacancyID: number): Promise<Candidate[]> {
    const url = `/recruitment/v1/vacancies/${vacancyID}/candidates`
    const apiCandidates = await this.httpConnection.get<ApiCandidateDTO[]>(url)

    if (apiCandidates.length === 0) return []

    return apiCandidates.map(candidateDTO => )[new Candidate('poli', 'pérez')]
  }
  findVacancyStates(vacancyID: number): VacancyState {
    throw new Error('Method not implemented.')
  }
}
