import { VacancyCandidateDTO } from '@/sesame/Candidate/Application/get-vacancy-candidates/VacancyCandidateDTO'
import { defineStore } from 'pinia'

interface State {
  candidates: VacancyCandidateDTO[]
}

export const usePiniaCandidateStore = defineStore('candidate', {
  state: () => ({
    candidates: [] as VacancyCandidateDTO[]
  }),
  actions: {
    newCandidate(candidate: VacancyCandidateDTO): void {
      this.candidates.push(candidate)
    },
    updateCandidate(candidate: VacancyCandidateDTO): void {
      this.candidates = this.candidates.map((candidateEach) => {
        if (candidateEach.id === candidate.id) {
          candidateEach = candidate
        }
        return candidateEach
      })
    },
    setCandidates(candidates: VacancyCandidateDTO[]): void {
      this.candidates = candidates
    }
  },
  getters: {
    getCandidates: (state: State): VacancyCandidateDTO[] => {
      return state.candidates
    }
  }
})
