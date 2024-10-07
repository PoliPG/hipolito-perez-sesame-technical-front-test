import type { Handler } from '@/sesame/Shared/EventBus/Domain/Handler'
import { inject, injectable } from 'inversify'
import CandidateContainerTypes from '../../CandidateContainerTypes'
import type { CandidateRepository } from '../../Domain/CandidateRepository'
import type { CreateCandidateRequest } from './CreateCandidateRequest'
import { CreateCandidateValidator } from '../services/CreateCandidateValidator'
import type { Notification } from '@/sesame/Shared/Notifications/Application/Notification'

@injectable()
export class CreateCandidateRequestHandler implements Handler {
  constructor(
    @inject(CandidateContainerTypes.CandidateRepository)
    private candidateRepository: CandidateRepository
  ) {}

  async handle(request: CreateCandidateRequest): Promise<Notification> {
    const notification = CreateCandidateValidator.validate(request)
    if (notification.isError()) return notification

    await this.candidateRepository.createCandidate({
      firstName: request.firstName!,
      lastName: request.lastName!,
      vacancyCandidateStatusId: request.vacancyCandidateStatusId!,
      vacancyId: request.vacancyId!
    })

    return notification
  }
}
