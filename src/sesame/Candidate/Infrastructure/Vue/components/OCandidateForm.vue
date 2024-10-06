<script setup lang="ts">
import AButton from '@/components/Button/AButton.vue'
import ASelectInput from '@/components/Input/ASelectInput.vue'
import MInput from '@/components/Input/MInput.vue'
import type { VacancyCandidateStatusDTO } from '@/sesame/Vacancy/Application/get-vacancy-candidate-status/VacancyCandidateStatusDTO'
import { ref } from 'vue'

interface Props {
  candidateStatuses: VacancyCandidateStatusDTO[]
}

const { candidateStatuses } = defineProps<Props>()
const selectedItem = ref<VacancyCandidateStatusDTO>()
const firstName = ref<string>()
const lastName = ref<string>()

function sendForm() {}
</script>

<template>
  <form>
    <div class="mb-3">
      <MInput v-model="firstName" placeholder="Nombre" />
    </div>
    <div class="mb-3">
      <MInput v-model="lastName" placeholder="Apellidos" />
    </div>
    <div class="mb-6">
      <ASelectInput
        v-model="selectedItem"
        :options="candidateStatuses"
        placeholder="Selecciona un estado"
      />
    </div>
    <div class="text-right mb-2">
      <AButton cta="Crear candidato" color="blue-marguerite" @click="sendForm" />
    </div>
  </form>
</template>
