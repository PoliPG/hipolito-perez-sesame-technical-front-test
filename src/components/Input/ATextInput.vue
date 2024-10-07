<script setup lang="ts">
const emit = defineEmits(['focus', 'focusOut'])

interface Props {
  placeholder: string
}

const { placeholder } = defineProps<Props>()
const input = defineModel()
</script>

<template>
  <input
    type="text"
    v-model="input"
    @focus="emit('focus')"
    @focusout="emit('focusOut')"
    v-bind="$attrs"
    :placeholder="placeholder"
    class="focus:outline-none"
  />
</template>
