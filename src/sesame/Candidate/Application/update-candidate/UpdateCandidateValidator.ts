import {
  NotificationBase,
  type Notification
} from '@/sesame/Shared/Notifications/Application/Notification'
import {
  ErrorNotification,
  type NotificationError
} from '@/sesame/Shared/Notifications/Application/ErrorNotification'
import type { UpdateCandidateRequest } from './UpdateCandidateRequest'
import { CreateCandidateRequestValidator } from '../create-candidate/CreateCandidateValidator'

export class UpdateCandidateRequestValidator {
  public static validate(candidateRequest: UpdateCandidateRequest): Notification {
    const errors: NotificationError[] = []

    const notification = CreateCandidateRequestValidator.validate(candidateRequest)
    if (notification.isError()) return notification

    if (!candidateRequest.candidateId || candidateRequest.candidateId.trim().length === 0) {
      errors.push({ id: 'candidate-id', message: 'El candidato es obligatorio.' })
    }

    return this.createNotification(errors)
  }

  private static createNotification(errors: NotificationError[]): Notification {
    if (errors.length === 0) {
      return new NotificationBase('Candidato válido.')
    }

    const errorNotification = new ErrorNotification('Candidato no válido.')
    errors.forEach((error) => {
      errorNotification.addError(error)
    })

    return errorNotification
  }
}
