import 'reflect-metadata'
import { expect, test } from 'vitest'
import type { Handler } from '@/sesame/Shared/EventBus/Domain/Handler'
import { Container } from 'inversify'
import { InMemoryCandidateRepository } from '@/sesame/Candidate/Infrastructure/InMemory/InMemoryCandidateRepository'
import CandidateContainerTypes from '@/sesame/Candidate/CandidateContainerTypes'
import type { CandidateRepository } from '@/sesame/Candidate/Domain/CandidateRepository'
import { CreateCandidateRequestHandler } from '../CreateCandidateRequestHandler'
import { UpdateCandidateRequestHandler } from '../../update-candidate/UpdateCandidateRequestHandler'
import { CreateCandidateRequest } from '../CreateCandidateRequest'

const container = new Container()
container
  .bind<CandidateRepository>(CandidateContainerTypes.CandidateRepository)
  .to(InMemoryCandidateRepository)
container
  .bind<Handler>(CandidateContainerTypes.CreateCandidateRequestHandler)
  .to(CreateCandidateRequestHandler)
container
  .bind<Handler>(CandidateContainerTypes.UpdateCandidateRequestHandler)
  .to(UpdateCandidateRequestHandler)

const containerTest = test.extend({
  container: container
})

containerTest('Valid candidate', async ({ container }) => {
  //Arrange
  const query = new CreateCandidateRequest('Poli', 'Pérez', 'id', 'id')
  const createHandler = container.get<CreateCandidateRequestHandler>(
    CandidateContainerTypes.CreateCandidateRequestHandler
  )

  //Act
  const notification = await createHandler.handle(query)

  //Assert
  expect(notification.isError()).toBe(false)
})

containerTest('Firstname is not valid', async ({ container }) => {
  //Arrange
  const query = new CreateCandidateRequest('', 'Pérez', 'id', 'id')
  const createHandler = container.get<CreateCandidateRequestHandler>(
    CandidateContainerTypes.CreateCandidateRequestHandler
  )

  //Act
  const notification = await createHandler.handle(query)

  //Assert
  expect(notification.isError()).toBe(true)
})

containerTest('LastName is not valid', async ({ container }) => {
  //Arrange
  const query = new CreateCandidateRequest('Poli', '', 'id', 'id')
  const createHandler = container.get<CreateCandidateRequestHandler>(
    CandidateContainerTypes.CreateCandidateRequestHandler
  )

  //Act
  const notification = await createHandler.handle(query)

  //Assert
  expect(notification.isError()).toBe(true)
})

containerTest('VacancyID is not valid', async ({ container }) => {
  //Arrange
  const query = new CreateCandidateRequest('Poli', 'Pérez', '', 'id')
  const createHandler = container.get<CreateCandidateRequestHandler>(
    CandidateContainerTypes.CreateCandidateRequestHandler
  )

  //Act
  const notification = await createHandler.handle(query)

  //Assert
  expect(notification.isError()).toBe(true)
})

containerTest('VacancyStatusID is not valid', async ({ container }) => {
  //Arrange
  const query = new CreateCandidateRequest('Poli', 'Pérez', 'id', '')
  const createHandler = container.get<CreateCandidateRequestHandler>(
    CandidateContainerTypes.CreateCandidateRequestHandler
  )

  //Act
  const notification = await createHandler.handle(query)

  //Assert
  expect(notification.isError()).toBe(true)
})
