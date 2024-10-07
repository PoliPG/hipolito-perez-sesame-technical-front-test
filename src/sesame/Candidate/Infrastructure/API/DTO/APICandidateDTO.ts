export interface ApiCandidateDTO {
  id: string
  companyId: string
  vacancy: {
    id: string
    companyId: string
    name: string
    description: string
    department: string
    contactType: string
    experience: string
    createdById: string
    status: string
    openedAt: string
    createdAt: string
    updatedAt: string
    public: boolean
    locationVacancy: {
      id: string
      companyId: string
      name: string
      createdAt: string
    }
    scheduleType: {
      id: string
      companyId: string
      name: string
      createdAt: string
    }
    category: {
      id: string
      companyId: string
      name: string
      createdAt: string
    }
  }
  vacancyId: string
  firstName: string
  lastName: string
  email: string
  phone: string
  type: string
  statusId: string
  status: {
    id: string
    name: string
    companyId: string
    order: number
    createdAt: string
    updatedAt: string
    vacancyId: string
  }
  linkedInURL: string
  desiredSalary: string
  startWorkDate: string
  evaluation: number
  web: string
  location: string
  hasDocument: boolean
  comment: string
  appliedAt: string
  threadId: string
  lastComment: {}
  numComments: number
  imageProfileURL: string
  checklist: {}
  createdAt: string
  updatedAt: string
  employeeId: string
}
