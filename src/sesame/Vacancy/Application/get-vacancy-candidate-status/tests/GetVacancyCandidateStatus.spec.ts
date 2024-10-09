import 'reflect-metadata'
import { assertType, expect, test } from 'vitest'
import type { Handler } from '@/sesame/Shared/EventBus/Domain/Handler'
import { Container } from 'inversify'
import VacancyContainerTypes from '@/sesame/Vacancy/VacancyContainerTypes'
import { InMemoryVacancyRepository } from '@/sesame/Vacancy/Infrastructure/InMemory/InMemoryVacancyRepository'
import type { VacancyRepository } from '@/sesame/Vacancy/Domain/VacancyRepository'
import { GetVacancyCandidateStatusQueryHandler } from '../GetVacancyCandidateStatusQueryHandler'
import { GetVacancyCandidateStatusQuery } from '../GetVacancyCandidateStatusQuery'
import { VacancyCandidateStatusDTO } from '../VacancyCandidateStatusDTO'

const container = new Container()
container
  .bind<VacancyRepository>(VacancyContainerTypes.VacancyRepository)
  .to(InMemoryVacancyRepository)
container
  .bind<Handler>(VacancyContainerTypes.GetVacancyCandidateStatusQueryHandler)
  .to(GetVacancyCandidateStatusQueryHandler)

const containerTest = test.extend({
  container: container
})

containerTest('Test use case get vacancy candidate status', async ({ container }) => {
  //Arrange
  const query = new GetVacancyCandidateStatusQuery('c762067e-de1e-4706-9649-accad9dacb1b')
  const queryHandler = container.get<GetVacancyCandidateStatusQueryHandler>(
    VacancyContainerTypes.GetVacancyCandidateStatusQueryHandler
  )

  //Act
  const candidateStatus = await queryHandler.handle(query)

  //Assert
  assertType<VacancyCandidateStatusDTO>(candidateStatus[0])
})

containerTest('Test use case get vacancy candidate status use vacancyID', async ({ container }) => {
  //Arrange
  const query = new GetVacancyCandidateStatusQuery('c762067e-de1e-4706-9649-accad9dacb1b')
  const queryHandler = container.get<GetVacancyCandidateStatusQueryHandler>(
    VacancyContainerTypes.GetVacancyCandidateStatusQueryHandler
  )

  //Act
  const candidateStatus = await queryHandler.handle(query)

  //Assert
  expect(candidateStatus.length).toBe(4)
})
