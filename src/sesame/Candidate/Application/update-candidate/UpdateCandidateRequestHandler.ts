import type { Handler } from '@/sesame/Shared/EventBus/Domain/Handler'
import { inject, injectable } from 'inversify'
import CandidateContainerTypes from '../../CandidateContainerTypes'
import type { CandidateRepository } from '../../Domain/CandidateRepository'
import type { Notification } from '@/sesame/Shared/Notifications/Application/Notification'
import type { UpdateCandidateRequest } from './UpdateCandidateRequest'
import { ErrorNotification } from '@/sesame/Shared/Notifications/Application/ErrorNotification'
import { UpdateCandidateRequestValidator } from './UpdateCandidateValidator'

@injectable()
export class UpdateCandidateRequestHandler implements Handler {
  constructor(
    @inject(CandidateContainerTypes.CandidateRepository)
    private candidateRepository: CandidateRepository
  ) {}

  async handle(request: UpdateCandidateRequest): Promise<Notification> {
    try {
      const notification = UpdateCandidateRequestValidator.validate(request)
      if (notification.isError()) return notification

      await this.candidateRepository.updateCandidate({
        candidateId: request.candidateId!,
        firstName: request.firstName!,
        lastName: request.lastName!,
        vacancyCandidateStatusId: request.vacancyCandidateStatusId!,
        vacancyId: request.vacancyId!
      })
      notification.setMessage('Candidato actualizado correctamente.')

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
