import 'reflect-metadata'
import { expect, test } from 'vitest'
import type { VacancyRepository } from '../../Domain/VacancyRepository'
import VacancyContainerTypes from '../../VacancyContainerTypes'
import { InMemoryVacancyRepository } from '../../Infrastructure/InMemory/InMemoryVacancyRepository'
import { GetVacancyCandidateStatusQuery } from '../get-vacancy-candidate-status/GetVacancyCandidateStatusQuery'
import type { Handler } from '@/sesame/Shared/EventBus/Domain/Handler'
import { GetVacancyCandidateStatusQueryHandler } from '../get-vacancy-candidate-status/GetVacancyCandidateStatusQueryHandler'
import { VacancyCandidateStatusDTO } from '../get-vacancy-candidate-status/VacancyCandidateStatusDTO'
import { Container } from 'inversify'

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

containerTest('Test use case get vacancy candidate status', async () => {
  //Arrange
  const query = new GetVacancyCandidateStatusQuery('c762067e-de1e-4706-9649-accad9dacb1b')
  const queryHandler = container.get<GetVacancyCandidateStatusQueryHandler>(
    VacancyContainerTypes.GetVacancyCandidateStatusQueryHandler
  )

  //Act
  const candidateStatus = await queryHandler.handle(query)

  //Assert
  expect(candidateStatus[0] instanceof VacancyCandidateStatusDTO).toBe(true)
})

containerTest('Test use case get vacancy candidate status use vacancyID', async () => {
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
