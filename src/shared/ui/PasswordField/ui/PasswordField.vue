<script setup lang="ts">
import { FloatLabel, Password } from 'primevue';

import type { PasswordFieldTypes } from '../models';

import { ErrorMessage } from '@/shared/ui/ErrorMessage';

const modelValue = defineModel<string>();
const {
  labelValue,
  isValid,
  errorMessage,
  errorTheme = 'default',
} = defineProps<PasswordFieldTypes.Props>();
</script>

<template>
  <FloatLabel :class="[`${errorTheme}Theme`, 'passwordField']">
    <Password
      v-model="modelValue"
      :feedback="false"
      :invalid="!isValid"
      class="inputWrapper"
      toggleMask
    />
    <label>{{ labelValue }}</label>
    <ErrorMessage v-if="!isValid && errorMessage" :message="errorMessage" :theme="errorTheme" />
  </FloatLabel>
</template>

<style lang="scss" scoped>
.passwordField {
  width: 100%;
  color: var(--secondary-100);

  &.warningTheme {
    &:has(input[aria-invalid='true']) {
      color: var(--tertiary-50);
    }
  }

  &.defaultTheme {
    &:has(input[aria-invalid='true']) {
      color: var(--red-100);
    }
  }

  :deep(.inputWrapper) {
    display: block;
    width: 100%;

    input {
      width: 100%;
      background-color: transparent;
      color: inherit;
      font-weight: 500;
      border-color: inherit;

      &:focus {
        border: 1px solid var(--tertiary-90);
      }
    }

    svg {
      color: inherit;
    }
  }

  :deep(label) {
    color: inherit !important;
  }
}
</style>
