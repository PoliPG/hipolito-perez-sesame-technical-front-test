import { Event as Request } from '@/sesame/Shared/EventBus/Domain/Event'

export class UpdateCandidateRequest extends Request {
  readonly candidateId: string
  readonly firstName?: string
  readonly lastName?: string
  readonly vacancyId?: string
  readonly vacancyCandidateStatusId?: string

  constructor(
    candidateId: string,
    firstName?: string,
    lastName?: string,
    vacancyId?: string,
    vacancyCandidateStatusId?: string
  ) {
    super()
    this.candidateId = candidateId
    this.firstName = firstName
    this.lastName = lastName
    this.vacancyCandidateStatusId = vacancyCandidateStatusId
    this.vacancyId = vacancyId
  }
}
