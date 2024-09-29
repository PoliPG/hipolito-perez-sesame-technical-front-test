import { injectable } from 'inversify'
import type { VacancyRepository } from '../../Domain/VacancyRepository'
import { VacancyCandidateStatus } from '../../Domain/VacancyCandidateStatus'

interface CandidateStatusDTO {
  id: string
  name: string
  order: number
  companyId: string
  createdAt: string
  updatedAt: string
  vacancyId: string
}

@injectable()
export class InMemoryVacancyRepository implements VacancyRepository {
  /**
   * Find states for a concrete vacancy
   */
  async findCandidateStatusByVacancy(vacancyID: string): Promise<VacancyCandidateStatus[]> {
    return this.getCandidateStatus()
      .filter((candidateState) => candidateState.vacancyId === vacancyID)
      .map(
        (candidateState) =>
          new VacancyCandidateStatus(candidateState.id, candidateState.name, candidateState.order)
      )
  }

  private getCandidateStatus(): CandidateStatusDTO[] {
    return [
      {
        id: 'd441e14b-f60d-44e1-958f-f9f66099efa1',
        name: 'New',
        order: 1,
        companyId: '7ae449bc-620c-4851-9d56-d25ff4094e34',
        createdAt: '2024-09-24T13:38:08+00:00',
        updatedAt: '2024-09-24T13:38:08+00:00',
        vacancyId: 'c762067e-de1e-4706-9649-accad9dacb1b'
      },
      {
        id: 'adf286b3-a6fa-4bf8-9d38-4e15d567f220',
        name: 'Accepted',
        order: 2,
        companyId: '7ae449bc-620c-4851-9d56-d25ff4094e34',
        createdAt: '2024-09-24T13:38:08+00:00',
        updatedAt: '2024-09-24T13:38:08+00:00',
        vacancyId: 'c762067e-de1e-4706-9649-accad9dacb1b'
      },
      {
        id: 'fe3fed21-8797-4603-93b6-7651eab32bfa',
        name: 'Interview',
        order: 3,
        companyId: '7ae449bc-620c-4851-9d56-d25ff4094e34',
        createdAt: '2024-09-24T13:38:08+00:00',
        updatedAt: '2024-09-24T13:38:08+00:00',
        vacancyId: 'c762067e-de1e-4706-9649-accad9dacb1b'
      },
      {
        id: '43319a1f-608b-459d-83e2-54505cbf9662',
        name: 'Selected',
        order: 4,
        companyId: '7ae449bc-620c-4851-9d56-d25ff4094e34',
        createdAt: '2024-09-24T13:38:08+00:00',
        updatedAt: '2024-09-24T13:38:08+00:00',
        vacancyId: 'c762067e-de1e-4706-9649-accad9dacb1b'
      },
      {
        id: '5b8bf85d-4c77-4d38-9a87-aa6074bf8bed',
        name: 'Discarded',
        order: 5,
        companyId: '7ae449bc-620c-4851-9d56-d25ff4094e34',
        createdAt: '2024-09-24T13:38:08+00:00',
        updatedAt: '2024-09-24T13:38:08+00:00',
        vacancyId: 'c762067e-de1e-4706-9649-accad9dacb1b'
      }
    ]
  }
}
