<script setup lang="ts">
import type { VacancyCandidateStatusDTO } from '@/sesame/Vacancy/Application/get-vacancy-candidate-status/VacancyCandidateStatusDTO'
import MHeader from '@/components/Header/MHeader.vue'
import OCard from '@/components/Card/OCard.vue'
import MTabs from '@/components/Tab/MTabs.vue'
import OMenu from '@/components/Menu/OMenu.vue'
import type { MenuItem } from '@/components/Menu/OMenuItem.vue'
import { ref } from 'vue'

interface Props {
  candidateStatus: VacancyCandidateStatusDTO[]
}
const { candidateStatus } = defineProps<Props>()

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
  <main class="md:flex mx-auto px-2 max-w-7xl">
    <div
      v-show="isMenuOpen"
      class="md:block fixed inset-0 bg-gray-600 bg-opacity-60"
      @click="toggleMenu"
    >
      <Transition>
        <OMenu
          v-if="isMenuOpen"
          :items="menuData"
          default-item="Reclutamiento"
          class="w-64 min-h-svh"
          @click.prevent.stop
        />
      </Transition>
    </div>

    <div class="md:flex-grow md:px-8">
      <MHeader class="mb-2" @toggle-menu="toggleMenu" />
      <OCard class="mb-2">
        <div class="-mt-2">
          <MTabs :tabs="[{ id: 'vacancies', default: true }, { id: 'candidates' }]">
            <template #vacancies>Vacantes</template>
            <template #candidates>Candidatos</template>
            <template #content="{ activeTab }">
              <div v-if="activeTab === 'vacancies'">
                <div v-for="candidateState in candidateStatus" :key="candidateState.id">
                  <span class="px-2 font-bold">{{ candidateState.name }}</span>
                </div>
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
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateX(-50px);
}
</style>
