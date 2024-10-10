import { createRouter, createWebHistory } from 'vue-router'
import Recruitment from '@/views/RecruitmentPage.vue'
import OVacancyBoard from '@/sesame/Vacancy/Infrastructure/Vue/components/VacancyBoard/OVacancyBoard.vue'
import OCandidateList from '@/sesame/Candidate/Infrastructure/Vue/components/CandidateList/OCandidateList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'recruitment',
      component: Recruitment,
      children: [
        {
          path: 'vacantes',
          name: 'vacancy-recruitment',
          component: OVacancyBoard
        },
        {
          path: 'candidatos',
          name: 'candidates-recruitment',
          component: OCandidateList
        }
      ]
    }
  ]
})

export default router
