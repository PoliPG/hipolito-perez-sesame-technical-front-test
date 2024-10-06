import {
  NotificationBase,
  type Notification
} from '@/sesame/Shared/Notifications/Domain/Notification'
import type { CreateCandidateRequest } from '../../Application/create-candidate/CreateCandidateRequest'
import {
  ErrorNotification,
  type NotificationError
} from '@/sesame/Shared/Notifications/Domain/ErrorNotification'

export class CreateCandidateValidator {
  public static validate(candidate: CreateCandidateRequest): Notification {
    const errors: NotificationError[] = []

    if (!candidate.firstName || candidate.firstName.trim().length === 0) {
      errors.push({ id: 'first-name-required', message: 'El campo Nombre es requerido.' })
    }

    if (!candidate.lastName || candidate.lastName.trim().length === 0) {
      errors.push({ id: 'last-name-required', message: 'El campo Apellidos es requerido.' })
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
