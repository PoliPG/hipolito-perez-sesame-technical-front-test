export class VacancyState {
  private _id: string
  private _name: string
  private _order: number

  constructor(id: string, name: string, order: number) {
    this._id = id
    this._name = name
    this._order = order
  }

  get name(): string {
    return this._name
  }

  get order(): number {
    return this._order
  }
}
