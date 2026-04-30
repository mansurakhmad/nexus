<script setup lang="ts">
import type { BaseHeadingTypes } from '../models';

const {
  fontSize,
  level = 'h1',
  theme = 'primary',
  transform = 'uppercase',
  weight = 'normal',
} = defineProps<BaseHeadingTypes.Props>();
</script>

<template>
  <component
    :is="level"
    :class="[
      'baseHeading',
      `${theme}Theme`,
      `${transform}Transform`,
      `${weight}WeightValue`,
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
  font-family: 'BBH Hegarty', sans-serif;
}

.primaryTheme {
  color: var(--primary-30);
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
  font-size: 24px;
  line-height: 32px;
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

.normalWeightValue {
  font-weight: 500;
}

.boldWeightValue {
  font-weight: 600;
}
</style>
