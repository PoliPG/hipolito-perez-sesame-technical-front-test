import type { VacancyCandidateStatus } from './VacancyCandidateStatus'

export interface VacancyRepository {
  findCandidateStatusByVacancy(vacancyID: string): Promise<VacancyCandidateStatus[]>
}
