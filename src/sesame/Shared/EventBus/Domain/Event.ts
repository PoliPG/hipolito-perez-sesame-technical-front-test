export class Event {
  getName(): string {
    return this.constructor.name
  }
}
