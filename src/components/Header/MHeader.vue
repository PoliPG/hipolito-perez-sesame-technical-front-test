<script setup lang="ts">
import AAvatar from '../Avatar/AAvatar.vue'
import AIcon from '../Icons/AIcon.vue'
import ATitle from '../Title/ATitle.vue'

const emit = defineEmits(['open-menu'])

function openMenu(): void {
  emit('open-menu')
}
</script>

<template>
  <header class="flex justify-between items-center px-3 md:px-0 py-3">
    <div class="flex items-center gap-2">
      <AIcon class="md:hidden" icon="menu" @click="openMenu" />
      <ATitle text="Reclutamiento" />
    </div>
    <AAvatar
      class="w-8 h-8"
      src="./src/assets/img/user_avatar.jpeg"
      :lazy="false"
      alt="User Avatar"
    />
  </header>
</template>
