export class VacancyCandidateStatusDTO {
  readonly id: string
  readonly name: string
  readonly order: number

  constructor(id: string, name: string, order: number) {
    this.id = id
    this.name = name
    this.order = order
  }
}
