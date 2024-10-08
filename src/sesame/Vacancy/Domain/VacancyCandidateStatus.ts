export class VacancyCandidateStatus {
  private _id: string
  private _name: string
  private _order: number

  constructor(id: string, name: string, order: number) {
    this._id = id
    this._name = name
    this._order = order
  }

  get id(): string {
    return this._id
  }

  get name(): string {
    return this._name
  }

  get order(): number {
    return this._order
  }
}
