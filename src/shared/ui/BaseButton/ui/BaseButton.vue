<script setup lang="ts">
import { Button } from 'primevue';

import type { BaseButtonTypes } from '../models';

const { theme = 'primary', type = 'button', disabled } = defineProps<BaseButtonTypes.Props>();
</script>

<template>
  <Button @click="$emit('onClick')" :class="[`${theme}Theme`, 'baseButton']" :disabled :type>
    <slot />
  </Button>
</template>

<style lang="scss" scoped>
@mixin common-styles($bg-color-0, $bg-color-50, $bg-color-100, $text-color, $border-value: none) {
  $gradient: radial-gradient(
    circle at center,
    $bg-color-0 0%,
    $bg-color-50 50%,
    $bg-color-100 100%
  );

  background: $gradient;
  background-size: 200% 200%;
  background-position: center;
  border: $border-value;
  color: $text-color;

  &:hover,
  &:active {
    background: $gradient;
    background-position: right bottom;
    border: $border-value;
    color: $text-color;
  }

  &:disabled {
    &:hover {
      background: $gradient;
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
      var(--primary-30),
      var(--primary-40),
      var(--primary-30),
      var(--primary-1)
    );
  }

  &.secondaryTheme {
    @include common-styles(
      var(--secondary-50),
      var(--secondary-60),
      var(--secondary-70),
      var(--primary-1)
    );
  }

  &.tertiaryTheme {
    @include common-styles(
      var(--tertiary-70),
      var(--tertiary-80),
      var(--tertiary-90),
      var(--primary-1)
    );
  }

  &.outlinedTheme {
    border: 1px solid var(--primary-50);

    @include common-styles(
      transparent,
      transparent,
      transparent,
      var(--color-field-text),
      1px solid var(--color-field-text)
    );

    &:hover,
    &:active {
      background-color: var(--neutral-1);
    }
  }

  &.transparentTheme {
    @include common-styles(transparent, transparent, transparent, var(--color-field-text));

    &:hover,
    &:active {
      color: var(--primary-70);
    }
  }

  &.neutralTheme {
    @include common-styles(
      var(--neutral-70),
      var(--neutral-80),
      var(--neutral-90),
      var(--primary-1)
    );
  }
}
</style>
