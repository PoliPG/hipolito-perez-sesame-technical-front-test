import { Candidate } from '@/sesame/Candidate/Domain/Candidate'
import type { ApiCandidateDTO } from './APICandidateDTO'
import { VacancyCandidateStatus } from '@/sesame/Vacancy/Domain/VacancyCandidateStatus'
import { Vacancy } from '@/sesame/Vacancy/Domain/Vacancy'

export class APICandidateMapper {
  static createFromDTO(apiCandidateDTO: ApiCandidateDTO): Candidate {
    return new Candidate(
      apiCandidateDTO.id,
      apiCandidateDTO.firstName,
      apiCandidateDTO.lastName,
      new Vacancy(apiCandidateDTO.vacancy.id, apiCandidateDTO.vacancy.name),
      new VacancyCandidateStatus(
        apiCandidateDTO.status.id,
        apiCandidateDTO.status.name,
        apiCandidateDTO.status.order
      ),
      new Date(apiCandidateDTO.updatedAt)
    )
  }
}
