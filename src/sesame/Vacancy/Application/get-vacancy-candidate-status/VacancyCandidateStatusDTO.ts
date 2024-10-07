import type { VacancyCandidateStatus } from '../../Domain/VacancyCandidateStatus'

export class VacancyCandidateStatusDTO {
  readonly id: string
  readonly name: string
  readonly order: number

  constructor(candidateStatus: VacancyCandidateStatus) {
    this.id = candidateStatus.id
    this.name = candidateStatus.name
    this.order = candidateStatus.order
  }

  getPrimitives() {
    return { ...this }
  }
}
