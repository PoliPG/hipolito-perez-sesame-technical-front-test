<script lang="ts" setup>
const emit = defineEmits(['click'])

interface Props {
  id: string
}

const { id } = defineProps<Props>()

function onClick(): void {
  emit('click', id)
}
</script>

<template>
  <li :tabindex="0" :data-id="id" @click="onClick" class="text-turquoise-200"><slot></slot></li>
</template>
