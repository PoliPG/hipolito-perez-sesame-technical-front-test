import 'reflect-metadata'
import { describe, expect, test } from 'vitest'
import type { Handler } from '@/sesame/Shared/EventBus/Domain/Handler'
import { Container } from 'inversify'
import { InMemoryCandidateRepository } from '@/sesame/Candidate/Infrastructure/InMemory/InMemoryCandidateRepository'
import CandidateContainerTypes from '@/sesame/Candidate/CandidateContainerTypes'
import type { CandidateRepository } from '@/sesame/Candidate/Domain/CandidateRepository'
import { UpdateCandidateRequestHandler } from '../../update-candidate/UpdateCandidateRequestHandler'
import { UpdateCandidateRequest } from '../UpdateCandidateRequest'

const container = new Container()
container
  .bind<CandidateRepository>(CandidateContainerTypes.CandidateRepository)
  .to(InMemoryCandidateRepository)
container
  .bind<Handler>(CandidateContainerTypes.UpdateCandidateRequestHandler)
  .to(UpdateCandidateRequestHandler)

const updateHandler = container.get<UpdateCandidateRequestHandler>(
  CandidateContainerTypes.UpdateCandidateRequestHandler
)

const containerTest = test.extend({
  updateHandler: updateHandler
})

describe('Update candidate use case', () => {
  containerTest('Valid candidate', async ({ updateHandler }) => {
    //Arrange
    const query = new UpdateCandidateRequest('c434f34-37u3-37e541', 'Poli', 'Pérez', 'id', 'id')

    //Act
    const notification = await updateHandler.handle(query)

    //Assert
    expect(notification.isError()).toBe(false)
  })

  containerTest.each([
    {
      name: 'Candidate not found',
      request: new UpdateCandidateRequest('dffd', 'Poli', 'Pérez', 'id', 'id'),
      errorName: 'unhandler-error',
      updateHandler
    },
    {
      name: 'ID is required',
      request: new UpdateCandidateRequest('', 'Poli', 'Pérez', 'id', 'id'),
      errorName: 'candidate-id',
      updateHandler
    },
    {
      name: 'Firstname is not valid',
      request: new UpdateCandidateRequest('c434f34-37u3-37e541', '', 'Pérez', 'id', 'id'),
      errorName: 'first-name',
      updateHandler
    },
    {
      name: 'LastName is not valid',
      request: new UpdateCandidateRequest('c434f34-37u3-37e541', 'Poli', '', 'id', 'id'),
      errorName: 'last-name',
      updateHandler
    },
    {
      name: 'VacancyID is not valid',
      request: new UpdateCandidateRequest('c434f34-37u3-37e541', 'Poli', 'Pérez', '', 'id'),
      errorName: 'vacancy-id',
      updateHandler
    },
    {
      name: 'VacancyStatusID is not valid',
      request: new UpdateCandidateRequest('c434f34-37u3-37e541', 'Poli', 'Pérez', 'id', ''),
      errorName: 'vacancy-candidate-status-id',
      updateHandler
    }
  ])('$name', async ({ request, updateHandler, errorName }) => {
    //Act
    const notification = await updateHandler.handle(request)
    //Assert
    expect(
      notification.isError() && !!notification.getErrors().find((error) => error.id === errorName)
    ).toBe(true)
  })
})
