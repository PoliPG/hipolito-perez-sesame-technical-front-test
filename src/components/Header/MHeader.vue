<script setup lang="ts">
import AAvatar from '../Avatar/AAvatar.vue'
import AIcon from '../Icons/AIcon.vue'
import ATitle from '../Title/ATitle.vue'

const emit = defineEmits(['toggle-menu'])

function toggleMenu(): void {
  emit('toggle-menu')
}
</script>

<template>
  <header class="flex justify-between items-center px-3 md:px-0 py-3">
    <div class="flex items-center gap-2">
      <AIcon class="lg:hidden" icon="menu" @click="toggleMenu" />
      <ATitle type="h1" text="Reclutamiento" />
    </div>
    <AAvatar
      class="w-8 h-8"
      src="./src/assets/img/user_avatar.jpeg"
      :lazy="false"
      alt="User Avatar"
    />
  </header>
</template>
