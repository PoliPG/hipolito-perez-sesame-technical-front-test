import type { Handler } from '@/sesame/Shared/EventBus/Domain/Handler'
import { inject, injectable } from 'inversify'
import CandidateContainerTypes from '../../CandidateContainerTypes'
import type { CandidateRepository } from '../../Domain/CandidateRepository'
import type { CreateCandidateRequest } from './CreateCandidateRequest'
import type { Notification } from '@/sesame/Shared/Notifications/Application/Notification'
import { ErrorNotification } from '@/sesame/Shared/Notifications/Application/ErrorNotification'
import { CreateCandidateRequestValidator } from './CreateCandidateValidator'

@injectable()
export class CreateCandidateRequestHandler implements Handler {
  constructor(
    @inject(CandidateContainerTypes.CandidateRepository)
    private candidateRepository: CandidateRepository
  ) {}

  async handle(request: CreateCandidateRequest): Promise<Notification> {
    try {
      const notification = CreateCandidateRequestValidator.validate(request)
      if (notification.isError()) return notification

      await this.candidateRepository.createCandidate({
        firstName: request.firstName!,
        lastName: request.lastName!,
        vacancyCandidateStatusId: request.vacancyCandidateStatusId!,
        vacancyId: request.vacancyId!
      })

      return notification
    } catch (e) {
      const notification = new ErrorNotification('Unhandler Error')
      notification.addError({
        id: 'unhandler-error',
        message: 'Hubo un error inesperado en la aplicación'
      })
      return notification
    }
  }
}
