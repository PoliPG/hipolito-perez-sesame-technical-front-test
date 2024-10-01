<script setup lang="ts">
import ATab from '../Tab/ATab.vue'
import OCard from './OCard.vue'
</script>

<template>
  <OCard>
    <menu>
      <ATab id="vacancies">Vacantes</ATab>
      <ATab id="candidates">Candidatos</ATab>
    </menu>
  </OCard>
</template>
