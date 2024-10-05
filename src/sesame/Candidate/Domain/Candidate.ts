import type { VacancyCandidateStatus } from '@/sesame/Vacancy/Domain/VacancyCandidateStatus'

export class Candidate {
  private _firstName: string
  private _lastName: string
  private _vacancyStatus: VacancyCandidateStatus
  private _updatedAt: Date

  constructor(
    firstName: string,
    lastName: string,
    vacancyStatus: VacancyCandidateStatus,
    updatedAt: Date
  ) {
    this._firstName = firstName
    this._lastName = lastName
    this._vacancyStatus = vacancyStatus
    this._updatedAt = updatedAt
  }

  get firstName(): string {
    return this._firstName
  }

  get lastName(): string {
    return this._lastName
  }

  get vacancyStatus(): VacancyCandidateStatus {
    return this._vacancyStatus
  }

  get updatedAt(): Date {
    return this._updatedAt
  }
}
