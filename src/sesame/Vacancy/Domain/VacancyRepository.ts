import type { Candidate } from '@/sesame/Candidate/Domain/Candidate'
import type { VacancyState } from './VacancyState'

export interface VacancyRepository {
  findVacancyCandidates(vacancyID: number): Promise<Candidate[]>
  findVacancyStates(vacancyID: number): Promise<VacancyState>
}
