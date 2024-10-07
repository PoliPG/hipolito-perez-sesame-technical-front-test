import type { Candidate } from './Candidate'

export interface CreateCandidateParams {
  firstName: string
  lastName: string
  vacancyId: string
  vacancyCandidateStatusId: string
}

export interface CandidateRepository {
  findCandidatesByVacancyId(vacancyId: string): Promise<Candidate[]>
  createCandidate(candidate: CreateCandidateParams): Promise<Candidate>
  updateCandidate(candidate: Candidate): Promise<Candidate>
}
