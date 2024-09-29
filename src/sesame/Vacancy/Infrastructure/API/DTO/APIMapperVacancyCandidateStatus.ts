import { VacancyCandidateStatus } from '@/sesame/Vacancy/Domain/VacancyCandidateStatus'
import type { APIVacancyCandidateStatusDTO } from './APIVacancyCandidateStatusDTO'

export class APIMapperVacancyCandidateStatus {
  static createFromDTO(dto: APIVacancyCandidateStatusDTO): VacancyCandidateStatus {
    return new VacancyCandidateStatus(dto.id, dto.name, dto.order)
  }
}
