<script setup lang="ts">
import type { BaseHeadingTypes } from '../models';

const {
  fontSize,
  level = 'h1',
  theme = 'primary',
  transform = 'uppercase',
} = defineProps<BaseHeadingTypes.Props>();
</script>

<template>
  <component
    :is="level"
    :class="[
      'baseHeading',
      `${theme}Theme`,
      `${transform}Transform`,
      { [`${fontSize}Size`]: fontSize },
    ]"
  >
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

.capitalizeTransform {
  text-transform: capitalize;
}

.uppercaseTransform {
  text-transform: uppercase;
}

.lowercaseTransform {
  text-transform: lowercase;
}

.xSmallSize {
  font-size: 12px;
  line-height: 16px;
}

.smallSize {
  font-size: 16px;
  line-height: 24px;
}

.mediumSize {
  font-size: 20px;
  line-height: 28px;
}

.largeSize {
  font-size: 32px;
  line-height: 40px;
}

.xLargeSize {
  font-size: 40px;
  line-height: 48px;
}

.extraLargeSize {
  font-size: 48px;
  line-height: 56px;
}
</style>
