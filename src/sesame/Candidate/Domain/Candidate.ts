import type { Vacancy } from '@/sesame/Vacancy/Domain/Vacancy'
import type { VacancyCandidateStatus } from '@/sesame/Vacancy/Domain/VacancyCandidateStatus'

export class Candidate {
  private _id: string
  private _firstName: string
  private _lastName: string
  private _vacancy: Vacancy
  private _vacancyStatus: VacancyCandidateStatus
  private _updatedAt: Date

  constructor(
    id: string,
    firstName: string,
    lastName: string,
    vacancy: Vacancy,
    vacancyStatus: VacancyCandidateStatus,
    updatedAt: Date
  ) {
    this._id = id
    this._firstName = firstName
    this._lastName = lastName
    this._vacancy = vacancy
    this._vacancyStatus = vacancyStatus
    this._updatedAt = updatedAt
  }

  get id(): string {
    return this._id
  }

  get firstName(): string {
    return this._firstName
  }

  get lastName(): string {
    return this._lastName
  }

  get vacancy(): Vacancy {
    return this._vacancy
  }

  get vacancyStatus(): VacancyCandidateStatus {
    return this._vacancyStatus
  }

  get updatedAt(): Date {
    return this._updatedAt
  }
}
