<script setup lang="ts">
import AAvatar from '../Avatar/AAvatar.vue'
import AMenuIcon from '../Icons/AMenuIcon.vue'
import ATitle from '../Title/ATitle.vue'

const emit = defineEmits(['open-menu'])

function openMenu(): void {
  emit('open-menu')
}
</script>

<template>
  <header class="flex justify-between items-center p-3">
    <div class="flex items-center gap-2">
      <AMenuIcon @click="openMenu" />
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
