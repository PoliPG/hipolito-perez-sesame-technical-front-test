<script setup lang="ts">
interface Props {
  src: string
  alt: string
  lazy: boolean
  height: number
  width: number
}
const { src, alt, lazy, height, width } = defineProps<Props>()

const widthPx = width + 4 + 'px'
const heightPx = height + 4 + 'px'
</script>

<template>
  <div class="p-1 container">
    <img
      class="rounded-full overflow-hidden"
      :src="src"
      :alt="alt"
      :loading="lazy ? 'lazy' : 'eager'"
      :width="width"
      :height="height"
    />
  </div>
</template>

<style lang="postcss" scoped>
.container {
  width: v-bind(widthPx);
  height: v-bind(heightPx);
  clip-path: polygon(
    36% 85%,
    53% 92%,
    67% 83%,
    85% 64%,
    85% 46%,
    84% 29%,
    78% 15%,
    62% 12%,
    45% 10%,
    30% 8%,
    19% 10%,
    3% 23%,
    0 33%,
    4% 47%,
    6% 65%,
    14% 68%,
    19% 78%
  );
}
</style>
