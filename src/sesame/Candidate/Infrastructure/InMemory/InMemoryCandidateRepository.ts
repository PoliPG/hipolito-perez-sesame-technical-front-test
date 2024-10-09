import { Candidate } from '../../Domain/Candidate'
import type {
  CandidateRepository,
  CreateCandidateParams,
  UpdateCandidateParams
} from '../../Domain/CandidateRepository'
import { injectable } from 'inversify'
import { Vacancy } from '@/sesame/Vacancy/Domain/Vacancy'
import { VacancyCandidateStatus } from '@/sesame/Vacancy/Domain/VacancyCandidateStatus'

interface InMemoryCandidateDTO {
  id: string
  firstName: string
  lastName: string
  vacancy: { id: string; name: string }
  status: { id: string; name: string; order: number }
  updatedAt: string
}

@injectable()
export class InMemoryCandidateRepository implements CandidateRepository {
  private candidates: Candidate[]

  constructor() {
    const candidate = this.mapCandidateDTO({
      id: 'c434f34-37u3-37e541',
      firstName: 'Hipólito',
      lastName: 'Pérez',
      vacancy: { id: 'c762067e-de1e-4706-9649-accad9dacb1b', name: '' },
      status: { id: '', name: '', order: 0 },
      updatedAt: ''
    })
    this.candidates = [candidate]
  }

  async findCandidatesByVacancyId(vacancyId: string): Promise<Candidate[]> {
    return this.candidates.filter((candidate) => vacancyId === candidate.vacancy.id)
  }

  async createCandidate(params: CreateCandidateParams): Promise<Candidate> {
    const candidate = this.mapCandidateDTO({
      id: 'userid-' + Math.random(),
      firstName: params.firstName,
      lastName: params.lastName,
      vacancy: { id: 'id-vacancy', name: 'Test' },
      status: { id: 'id', name: 'status-test', order: 0 },
      updatedAt: new Date().toDateString()
    })
    this.candidates.push(candidate)
    return candidate
  }

  async updateCandidate(params: UpdateCandidateParams): Promise<Candidate> {
    const candidate = this.candidates.find((candidate) => candidate.id === params.candidateId)
    if (!candidate) throw new Error('Candidate not found')
    //TODO: update candidate, not needed for testing.
    return candidate
  }

  private mapCandidateDTO(candidate: InMemoryCandidateDTO) {
    return new Candidate(
      candidate.id,
      candidate.firstName,
      candidate.lastName,
      new Vacancy(candidate.vacancy.id, candidate.vacancy.name),
      new VacancyCandidateStatus(
        candidate.status.id,
        candidate.status.name,
        candidate.status.order
      ),
      new Date(candidate.updatedAt)
    )
  }
}
