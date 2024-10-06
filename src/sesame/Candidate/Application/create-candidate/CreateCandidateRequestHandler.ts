import type { Handler } from '@/sesame/Shared/EventBus/Domain/Handler'
import { inject, injectable } from 'inversify'
import CandidateContainerTypes from '../../CandidateContainerTypes'
import type { CandidateRepository } from '../../Domain/CandidateRepository'
import type { CreateCandidateRequest } from './CreateCandidateRequest'
import { CreateCandidateValidator } from '../../Domain/services/CreateCandidateValidator'
import type { Notification } from '@/sesame/Shared/Notifications/Domain/Notification'

@injectable()
export class CreateCandidateRequestHandler implements Handler {
  constructor(
    @inject(CandidateContainerTypes.CandidateRepository)
    private candidateRepository: CandidateRepository
  ) {}

  async handle(request: CreateCandidateRequest): Promise<Notification> {
    const notification = CreateCandidateValidator.validate(request)
    if (notification.invalid) return notification

    const candidates = await this.candidateRepository.createCandidate()
    return candidates.map((candidate) => new VacancyCandidateDTO(candidate).getPrimitives())
  }
}
