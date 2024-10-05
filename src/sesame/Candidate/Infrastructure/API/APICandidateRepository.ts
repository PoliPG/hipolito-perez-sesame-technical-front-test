import type { HttpConnection } from '@/sesame/Shared/Http/Domain/HttpConnection'
import type { Candidate } from '../../Domain/Candidate'
import type { CandidateRepository } from '../../Domain/CandidateRepository'
import { injectable, inject } from 'inversify'
import HttpContainerTypes from '@/sesame/Shared/Http/HttpContainerTypes'

@injectable()
export class APICandidateRepository implements CandidateRepository {
  constructor(
    @inject(HttpContainerTypes.BackendHttpConnection)
    private httpConnection: HttpConnection
  ) {}

  findCandidatesByVacancy(vacancyId: string): Promise<Candidate[]> {
    throw new Error('Method not implemented.')
  }
  createCandidate(candidate: Candidate): Promise<void> {
    throw new Error('Method not implemented.')
  }
  updateCandidate(candidate: Candidate): Promise<void> {
    throw new Error('Method not implemented.')
  }
}
