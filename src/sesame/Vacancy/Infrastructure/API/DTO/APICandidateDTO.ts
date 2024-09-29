export interface ApiCandidateDTO {
  id: string
  name: 'New' | 'Accepted' | 'Interview' | 'Selected' | 'Discarded'
  order: number
  companyId: string
  createdAt: string
  updatedAt: string
  vacancyId: string
}
