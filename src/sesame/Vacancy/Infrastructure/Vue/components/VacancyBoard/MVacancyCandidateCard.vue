<script setup lang="ts">
import '@github/relative-time-element'
import type { VacancyCandidateDTO } from '@/sesame/Candidate/Application/get-vacancy-candidates/VacancyCandidateDTO'
import AIcon from '@/components/Icons/AIcon.vue'

interface Props {
  candidate: VacancyCandidateDTO
}

const { candidate } = defineProps<Props>()
</script>

<template>
  <article class="flex flex-col gap-4 border-[#E2E8F0] bg-[#F8FAFC] px-3 py-2 border rounded-lg">
    <div class="flex justify-between items-center">
      <p class="font-semibold truncate">{{ candidate.firstName }} {{ candidate.lastName }}</p>
      <AIcon class="text-[#1F2D52]" :width="14" :height="14" icon="vertical-dots" />
    </div>
    <div class="flex items-center gap-1 font-normal text-[#94A3B8] text-sm">
      <AIcon :width="14" :height="14" icon="clock" />
      <relative-time
        class="first-letter:capitalize"
        :datetime="candidate.updatedAt"
      ></relative-time>
    </div>
  </article>
</template>
