<script setup lang="ts">
interface Props {
  src: string
  alt: string
  lazy: boolean
  height: number
  width: number
}
const { src, alt, lazy, height, width } = defineProps<Props>()

const widthPx = width + 'px'
const heightPx = height + 'px'
</script>

<template>
  <div class="px-px container">
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
    35% 89%,
    48% 91%,
    64% 88%,
    87% 65%,
    92% 50%,
    87% 31%,
    79% 17%,
    68% 9%,
    55% 4%,
    32% 3%,
    19% 6%,
    11% 16%,
    2% 29%,
    0 38%,
    1% 49%,
    6% 66%,
    10% 74%,
    18% 80%
  );
}
</style>
