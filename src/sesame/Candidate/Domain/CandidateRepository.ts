import type { Candidate } from './Candidate'

export interface CandidateRepository {
  findCandidatesByVacancy(vacancyId: string): Promise<Candidate[]>
  createCandidate(candidate: Candidate): Promise<void>
  updateCandidate(candidate: Candidate): Promise<void>
}
