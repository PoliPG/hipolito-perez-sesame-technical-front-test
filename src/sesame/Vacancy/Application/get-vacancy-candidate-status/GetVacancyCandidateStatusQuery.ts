import { Event as Query } from '@/sesame/Shared/EventBus/Domain/Event'

export class GetVacancyCandidateStatusQuery extends Query {
  readonly vacancyId: string

  constructor(vacancyId: string) {
    super()
    this.vacancyId = vacancyId
  }
}
