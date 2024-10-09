import type { Candidate } from '../../Domain/Candidate'

export class VacancyCandidateDTO {
  readonly id: string
  readonly firstName: string
  readonly lastName: string
  readonly status: string
  readonly updatedAt: Date

  constructor(candidate: Candidate) {
    this.id = candidate.id
    this.firstName = candidate.firstName
    this.lastName = candidate.lastName
    this.status = candidate.vacancyStatus.name
    this.updatedAt = candidate.updatedAt
  }

  getPrimitives() {
    return { ...this }
  }
}
