import { VacancyCandidateDTO } from '@/sesame/Candidate/Application/get-vacancy-candidates/VacancyCandidateDTO'
import { defineStore } from 'pinia'

interface State {
  candidates: VacancyCandidateDTO[]
  candidateSearch: string
}

export const usePiniaCandidateStore = defineStore('candidate', {
  state: () => ({
    candidates: [] as VacancyCandidateDTO[],
    candidateSearch: ''
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
    },
    setCandidateSearch(search: string): void {
      this.candidateSearch = search
    }
  },
  getters: {
    getCandidates: (state: State): VacancyCandidateDTO[] => {
      if (state.candidateSearch === '') return state.candidates
      return state.candidates.filter((candidate) =>
        candidate.firstName
          .concat(candidate.lastName)
          .toLocaleLowerCase()
          .includes(state.candidateSearch.toLocaleLowerCase())
      )
    }
  }
})
