<script setup lang="ts">
import type { BaseHeadingTypes } from '../models';

const { level = 'h1', theme = 'primary' } = defineProps<BaseHeadingTypes.Props>();
</script>

<template>
  <component :is="level" :class="['baseHeading', `${theme}Theme`]">
    <slot />
  </component>
</template>

<style lang="scss" scoped>
.baseHeading {
  display: inline-block;
  margin: 0;
}

.primaryTheme {
  color: var(--primary-40);
}

.secondaryTheme {
  color: var(--secondary-60);
}

.tertiaryTheme {
  color: var(--tertiary-50);
}
</style>
