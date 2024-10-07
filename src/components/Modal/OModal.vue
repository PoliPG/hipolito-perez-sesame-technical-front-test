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
  <Transition name="fade">
    <dialog
      v-if="isOpen"
      class="z-50 fixed inset-0 flex justify-center items-start bg-gray-600 bg-opacity-60 pt-24 md:pt-64 w-full h-full"
      :open="isOpen"
      @click="close"
    >
      <div v-if="isOpen" @click.prevent.stop class="modal-content">
        <slot></slot>
      </div>
    </dialog>
  </Transition>
</template>

<style lang="postcss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
  .modal-content {
    transition: all 0.5s ease;
  }
}

.fade-leave-active {
  transition-delay: 0.2s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-from,
.fade-leave-to {
  .modal-content {
    transform: translateY(400px);
  }
}
</style>
