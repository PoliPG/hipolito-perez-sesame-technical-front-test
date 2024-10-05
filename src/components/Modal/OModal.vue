<script setup lang="ts">
const emit = defineEmits(['close'])

interface Props {
  isOpen: boolean
}

const { isOpen } = defineProps<Props>()

function close() {
  emit('close')
}
</script>

<template>
  <Transition v-if="isOpen" :open="isOpen">
    <dialog v-if="isOpen" class="z-50 fixed inset-0 bg-gray-600 bg-opacity-60" @click="close">
      <div @click.prevent.stop class="flex justify-center items-center">
        <slot></slot>
      </div>
    </dialog>
  </Transition>
</template>

<style lang="css" scoped>
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateY(-50px);
}
</style>
