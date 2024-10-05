import type { Candidate } from '../../Domain/Candidate'

export class VacancyCandidateDTO {
  readonly firstName: string
  readonly lastName: string
  readonly status: string

  constructor(candidate: Candidate) {
    this.firstName = candidate.firstName
    this.lastName = candidate.lastName
    this.status = candidate.vacancyStatus.name
  }

  getPrimitives() {
    return { ...this }
  }
}
