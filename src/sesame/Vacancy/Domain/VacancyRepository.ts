import type { VacancyState } from './VacancyState'

export interface VacancyRepository {
  findVacancyStates(vacancyID: number): Promise<VacancyState[]>
}
