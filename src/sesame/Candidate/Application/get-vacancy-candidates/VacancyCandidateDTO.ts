import type { Candidate } from '../../Domain/Candidate'

export class VacancyCandidateDTO {
  readonly firstName: string
  readonly lastName: string
  readonly status: string
  readonly updatedAt: Date

  constructor(candidate: Candidate) {
    this.firstName = candidate.firstName
    this.lastName = candidate.lastName
    this.status = candidate.vacancyStatus.name
    this.updatedAt = candidate.updatedAt
  }

  getPrimitives() {
    return { ...this }
  }
}
