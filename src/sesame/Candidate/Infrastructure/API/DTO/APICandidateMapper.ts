import { Candidate } from '@/sesame/Candidate/Domain/Candidate'
import type { ApiCandidateDTO } from './APICandidateDTO'
import { VacancyCandidateStatus } from '@/sesame/Vacancy/Domain/VacancyCandidateStatus'

export class APICandidateMapper {
  static createFromDTO(apiCandidateDTO: ApiCandidateDTO): Candidate {
    return new Candidate(
      apiCandidateDTO.firstName,
      apiCandidateDTO.lastName,
      new VacancyCandidateStatus(
        apiCandidateDTO.status.id,
        apiCandidateDTO.status.name,
        apiCandidateDTO.status.order
      ),
      new Date(apiCandidateDTO.updatedAt)
    )
  }
}
