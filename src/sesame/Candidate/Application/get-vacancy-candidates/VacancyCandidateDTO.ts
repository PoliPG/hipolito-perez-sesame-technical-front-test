import type { Candidate } from '../../Domain/Candidate'

interface VacancyCandidateStatusDTO {
  id: string
  name: string
}

export class VacancyCandidateDTO {
  readonly id: string
  readonly firstName: string
  readonly lastName: string
  readonly status: VacancyCandidateStatusDTO
  readonly updatedAt: Date

  constructor(candidate: Candidate) {
    this.id = candidate.id
    this.firstName = candidate.firstName
    this.lastName = candidate.lastName
    this.status = { id: candidate.vacancyStatus.id, name: candidate.vacancyStatus.name }
    this.updatedAt = candidate.updatedAt
  }

  getPrimitives() {
    return { ...this }
  }
}
