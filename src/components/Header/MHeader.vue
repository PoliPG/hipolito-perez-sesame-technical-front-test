<script setup lang="ts">
import AAvatar from '../Avatar/AAvatar.vue'
import AIcon from '../Icons/AIcon.vue'
import ATitle from '../Title/ATitle.vue'
import UserImage from '@/assets/img/user_avatar.jpeg'

const emit = defineEmits(['toggle-menu'])

interface Props {
  title: string
}

const { title } = defineProps<Props>()

function toggleMenu(): void {
  emit('toggle-menu')
}
</script>

<template>
  <header class="flex justify-between items-center px-3 md:px-0 py-3">
    <div class="flex items-center gap-2">
      <AIcon class="lg:hidden" icon="menu" @click="toggleMenu" />
      <ATitle type="h1" :text="title" />
    </div>
    <AAvatar class="w-8 h-8" :src="UserImage" :lazy="false" alt="User Avatar" />
  </header>
</template>
