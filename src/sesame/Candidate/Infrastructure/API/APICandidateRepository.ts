import type { HttpConnection } from '@/sesame/Shared/Http/Domain/HttpConnection'
import type { Candidate } from '../../Domain/Candidate'
import type {
  CandidateRepository,
  CreateCandidateParams,
  UpdateCandidateParams
} from '../../Domain/CandidateRepository'
import { injectable, inject } from 'inversify'
import HttpContainerTypes from '@/sesame/Shared/Http/HttpContainerTypes'
import type { ApiCandidateDTO } from './DTO/APICandidateDTO'
import type { APIDTO } from '@/sesame/Shared/Http/Infrastructure/APIDTO'
import { APICandidateMapper } from './DTO/APICandidateMapper'

interface APICandidateCreateDTO {
  firstName: string
  lastName: string
  email?: string
  phone?: string
  linkedinURL?: string
  desiredSalary?: string
  startWorkDate?: string
  web?: string
  location?: string
  vacancyId: string
  statusId: string
}

@injectable()
export class APICandidateRepository implements CandidateRepository {
  constructor(
    @inject(HttpContainerTypes.BackendHttpConnection)
    private backendHttpConnection: HttpConnection
  ) {}

  async findCandidatesByVacancyId(vacancyId: string): Promise<Candidate[]> {
    const url = `/recruitment/v1/vacancies/${vacancyId}/candidates`
    const apiCandidates = await this.backendHttpConnection.get<APIDTO<ApiCandidateDTO[]>>(url)

    if (apiCandidates.data.length === 0) return []
    return apiCandidates.data.map((dto) => APICandidateMapper.createFromDTO(dto))
  }

  async createCandidate(params: CreateCandidateParams): Promise<Candidate> {
    const url = `/recruitment/v1/candidates`

    const data = {
      firstName: params.firstName,
      lastName: params.lastName,
      vacancyId: params.vacancyId,
      statusId: params.vacancyCandidateStatusId
    }

    const apiCandidate = await this.backendHttpConnection.post<
      APIDTO<ApiCandidateDTO>,
      APICandidateCreateDTO
    >(url, data)

    return APICandidateMapper.createFromDTO(apiCandidate.data)
  }

  async updateCandidate(params: UpdateCandidateParams): Promise<Candidate> {
    const url = `/recruitment/v1/candidates/${params.candidateId}`

    const data = {
      firstName: params.firstName,
      lastName: params.lastName,
      vacancyId: params.vacancyId,
      statusId: params.vacancyCandidateStatusId
    }

    const apiCandidate = await this.backendHttpConnection.put<
      APIDTO<ApiCandidateDTO>,
      APICandidateCreateDTO
    >(url, data)

    return APICandidateMapper.createFromDTO(apiCandidate.data)
  }
}
