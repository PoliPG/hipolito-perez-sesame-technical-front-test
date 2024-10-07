import { Event as Request } from '@/sesame/Shared/EventBus/Domain/Event'

export class CreateCandidateRequest extends Request {
  readonly firstName?: string
  readonly lastName?: string
  readonly vacancyId?: string
  readonly vacancyCandidateStatusId?: string

  constructor(
    firstName?: string,
    lastName?: string,
    vacancyId?: string,
    vacancyCandidateStatusId?: string
  ) {
    super()
    this.firstName = firstName
    this.lastName = lastName
    this.vacancyCandidateStatusId = vacancyCandidateStatusId
    this.vacancyId = vacancyId
  }
}
