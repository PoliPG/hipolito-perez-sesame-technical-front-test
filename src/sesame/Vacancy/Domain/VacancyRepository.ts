import type { VacancyCandidateStatus } from './VacancyCandidateStatus'

export interface VacancyRepository {
  findCandidateStatusByVacancy(vacancyID: number): Promise<VacancyCandidateStatus[]>
}
