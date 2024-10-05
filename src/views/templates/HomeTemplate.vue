<script setup lang="ts">
import { ref } from 'vue'
import type { VacancyCandidateStatusDTO } from '@/sesame/Vacancy/Application/get-vacancy-candidate-status/VacancyCandidateStatusDTO'
import type { VacancyCandidateDTO } from '@/sesame/Candidate/Application/get-vacancy-candidates/VacancyCandidateDTO'
import type { MenuItem } from '@/components/Menu/OMenuItem.vue'
// Components
import MHeader from '@/components/Header/MHeader.vue'
import OCard from '@/components/Card/OCard.vue'
import MTabs from '@/components/Tab/MTabs.vue'
import OMenu from '@/components/Menu/OMenu.vue'
import OVacancyBoard from '@/sesame/Vacancy/Infrastructure/Vue/components/VacancyBoard/OVacancyBoard.vue'

interface Props {
  candidateStatuses: VacancyCandidateStatusDTO[]
  candidates: VacancyCandidateDTO[]
}
const { candidateStatuses } = defineProps<Props>()

const isMenuOpen = ref(false)

const menuData: MenuItem[] = [
  {
    name: 'Administrador',
    items: [
      {
        icon: 'star',
        name: 'Talento',
        items: [
          {
            name: 'Reclutamiento'
          }
        ]
      }
    ]
  }
]

function toggleMenu(): void {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <main class="md:flex mx-auto px-2 w-full max-w-8xl">
    <div
      :class="{ hidden: !isMenuOpen }"
      class="lg:block md:relative fixed inset-0 bg-gray-600 bg-opacity-60 menu"
      @click="toggleMenu"
    >
      <OMenu
        :items="menuData"
        default-item="Reclutamiento"
        class="md:block w-64 min-h-svh"
        :class="{ hidden: !isMenuOpen }"
        @click.prevent.stop
      />
    </div>

    <div class="md:flex-grow md:px-6 overflow-hidden">
      <MHeader class="mb-2" @toggle-menu="toggleMenu" />
      <OCard class="mb-2">
        <div class="-mt-2">
          <MTabs :tabs="[{ id: 'vacancies', default: true }, { id: 'candidates' }]">
            <template #vacancies>Vacantes</template>
            <template #candidates>Candidatos</template>
            <template #content="{ activeTab }">
              <div v-if="activeTab === 'vacancies'">
                <OVacancyBoard :candidate-statuses="candidateStatuses" :candidates="candidates" />
              </div>
              <div v-else-if="activeTab === 'candidates'">Candidatos</div>
            </template>
          </MTabs>
        </div>
      </OCard>
    </div>
  </main>
</template>

<style lang="css" scoped>
.menu {
  transition: all 0.5s ease;
}
</style>
