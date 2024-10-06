<script setup lang="ts">
const emit = defineEmits(['focus', 'focusOut'])

interface Props {
  placeholder: string
}

const { placeholder } = defineProps<Props>()
</script>

<template>
  <input
    type="text"
    @focus="emit('focus')"
    @focusout="emit('focusOut')"
    v-bind="$attrs"
    :placeholder="placeholder"
    class="focus:outline-none"
  />
</template>
