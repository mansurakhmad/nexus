<script setup lang="ts">
import { Button } from 'primevue';

import type { BaseButtonTypes } from '../models';

const {
  value,
  theme = 'primary',
  type = 'button',
  disabled,
} = defineProps<BaseButtonTypes.Props>();
</script>

<template>
  <Button @click="$emit('onClick')" :class="[`${theme}Theme`, 'baseButton']" :disabled :type>
    {{ value }}
  </Button>
</template>

<style lang="scss" scoped>
@mixin common-styles($bg-color-0, $bg-color-50, $bg-color-100, $text-color, $border-value: none) {
  background: radial-gradient(
    circle at center,
    $bg-color-0 0%,
    $bg-color-50 50%,
    $bg-color-100 100%
  );
  background-size: 200% 200%;
  background-position: center;
  border: $border-value;
  color: $text-color;

  &:hover,
  &:active {
    background: radial-gradient(
      circle at center,
      $bg-color-0 0%,
      $bg-color-50 50%,
      $bg-color-100 100%
    );
    background-position: right bottom;
    border: $border-value;
    color: $text-color;
  }

  &:disabled {
    &:hover {
      background: radial-gradient(
        circle at center,
        $bg-color-0 0%,
        $bg-color-50 50%,
        $bg-color-100 100%
      );
      background-size: 200% 200%;
      background-position: center;
    }
  }
}

.baseButton {
  padding: 14px 20px;
  background-size: 200% 200%;
  background-position: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;

  &.primaryTheme {
    @include common-styles(
      var(--primary-80),
      var(--primary-90),
      var(--primary-100),
      var(--white-100)
    );
  }

  &.secondaryTheme {
    @include common-styles(
      var(--secondary-50),
      var(--secondary-60),
      var(--secondary-70),
      var(--white-100)
    );
  }

  &.invertedTheme {
    @include common-styles(
      var(--neutral-50),
      var(--neutral-60),
      var(--neutral-70),
      var(--white-100)
    );
  }

  &.outlinedTheme {
    border: 1px solid var(--primary-50);

    @include common-styles(
      transparent,
      transparent,
      transparent,
      var(--primary-100),
      1px solid var(--primary-100)
    );

    &:hover,
    &:active {
      background-color: var(--neutral-1);
    }
  }

  &.transparentTheme {
    @include common-styles(transparent, transparent, transparent, var(--primary-100));

    &:hover,
    &:active {
      color: var(--primary-70);
    }
  }
}
</style>
