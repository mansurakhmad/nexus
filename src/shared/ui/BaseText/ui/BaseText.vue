<script setup lang="ts">
import type { BaseTextTypes } from '../models';

const { size, tag = 'p', weight } = defineProps<BaseTextTypes.Props>();

const classNames = ['baseText', `${size}SizeText`, `${weight}WeightText`];
</script>

<template>
  <template v-if="tag === 'span'">
    <span :class="classNames">
      <slot />
    </span>
  </template>

  <template v-else>
    <p :class="classNames">
      <slot />
    </p>
  </template>
</template>

<style lang="scss" scoped>
.baseText {
  margin: 0;
  color: var(--black-000);
}

// SIZE
.smallSizeText {
  font-size: 12px;
  line-height: 14px;
}

.mediumSizeText {
  font-size: 14px;
  line-height: 18px;
}

.largeSizeText {
  font-size: 16px;
  line-height: 20px;
}

.xLargeSizeText {
  font-size: 20px;
  line-height: 24px;
}

.extraLargeSizeText {
  font-size: 24px;
  line-height: 28px;
}

// WEIGHT
.normalWeightText {
  font-weight: 400;
}

.semiboldWeightText {
  font-weight: 500;
}

.boldWeightText {
  font-weight: 600;
}
</style>
