import 'reflect-metadata'
import { describe, expect, test } from 'vitest'
import type { Handler } from '@/sesame/Shared/EventBus/Domain/Handler'
import { Container, id } from 'inversify'
import { InMemoryCandidateRepository } from '@/sesame/Candidate/Infrastructure/InMemory/InMemoryCandidateRepository'
import CandidateContainerTypes from '@/sesame/Candidate/CandidateContainerTypes'
import type { CandidateRepository } from '@/sesame/Candidate/Domain/CandidateRepository'
import { CreateCandidateRequestHandler } from '../CreateCandidateRequestHandler'
import { CreateCandidateRequest } from '../CreateCandidateRequest'

const container = new Container()
container
  .bind<CandidateRepository>(CandidateContainerTypes.CandidateRepository)
  .to(InMemoryCandidateRepository)
container
  .bind<Handler>(CandidateContainerTypes.CreateCandidateRequestHandler)
  .to(CreateCandidateRequestHandler)

const createHandler = container.get<CreateCandidateRequestHandler>(
  CandidateContainerTypes.CreateCandidateRequestHandler
)

const containerTest = test.extend({
  createHandler
})

describe('Create candidate use case', () => {
  containerTest('Valid candidate', async ({ createHandler }) => {
    //Arrange
    const query = new CreateCandidateRequest('Poli', 'Pérez', 'id', 'id')

    //Act
    const notification = await createHandler.handle(query)

    //Assert
    expect(notification.isError()).toBe(false)
  })

  containerTest.each([
    {
      name: 'Firstname is not valid',
      request: new CreateCandidateRequest('', 'Pérez', 'id', 'id'),
      errorName: 'first-name',
      createHandler
    },
    {
      name: 'LastName is not valid',
      request: new CreateCandidateRequest('Poli', '', 'id', 'id'),
      errorName: 'last-name',
      createHandler
    },
    {
      name: 'VacancyID is not valid',
      request: new CreateCandidateRequest('Poli', 'Pérez', '', 'id'),
      errorName: 'vacancy-id',
      createHandler
    },
    {
      name: 'VacancyStatusID is not valid',
      request: new CreateCandidateRequest('Poli', 'Pérez', 'id', ''),
      errorName: 'vacancy-candidate-status-id',
      createHandler
    }
  ])('$name', async ({ request, createHandler, errorName }) => {
    //Act
    const notification = await createHandler.handle(request)
    //Assert
    expect(
      notification.isError() && !!notification.getErrors().find((error) => error.id === errorName)
    ).toBe(true)
  })
})
