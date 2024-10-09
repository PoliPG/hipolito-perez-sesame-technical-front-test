import {
  NotificationBase,
  type Notification
} from '@/sesame/Shared/Notifications/Application/Notification'
import type { CreateCandidateRequest } from './CreateCandidateRequest'
import {
  ErrorNotification,
  type NotificationError
} from '@/sesame/Shared/Notifications/Application/ErrorNotification'

export class CreateCandidateRequestValidator {
  public static validate(candidateRequest: CreateCandidateRequest): Notification {
    const errors: NotificationError[] = []

    if (!candidateRequest.firstName || candidateRequest.firstName.trim().length === 0) {
      errors.push({ id: 'first-name', message: 'El campo Nombre es requerido.' })
    }

    if (!candidateRequest.lastName || candidateRequest.lastName.trim().length === 0) {
      errors.push({ id: 'last-name', message: 'El campo Apellidos es requerido.' })
    }

    if (
      !candidateRequest.vacancyCandidateStatusId ||
      candidateRequest.vacancyCandidateStatusId.trim().length === 0
    ) {
      errors.push({
        id: 'vacancy-candidate-status-id',
        message: 'El estado de la candidatura en la vacante es requerido.'
      })
    }

    if (!candidateRequest.vacancyId || candidateRequest.vacancyId.trim().length === 0) {
      errors.push({ id: 'vacancy-id', message: 'La vacante es requerida.' })
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
