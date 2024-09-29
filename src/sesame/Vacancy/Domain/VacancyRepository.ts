import type { Candidate } from '@/sesame/Candidate/Domain/Candidate'
import type { VacancyState } from './VacancyState'

export interface VacancyRepository {
  findVacancyCandidates(vacancyID: number): Candidate[]
  findVacancyStates(vacancyID: number): VacancyState
}
