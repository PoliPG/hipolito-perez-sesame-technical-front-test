import { VacancyState } from '@/sesame/Vacancy/Domain/VacancyState'
import type { APIVacancyStateDTO } from './APIVacancyStateDTO'

export class APIMapperVacancyState {
  static createFromDTO(dto: APIVacancyStateDTO): VacancyState {
    return new VacancyState(dto.id, dto.name, dto.order)
  }
}
