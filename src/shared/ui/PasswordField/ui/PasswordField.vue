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
  color: var(--color-field-text);
  box-shadow: var(--field-box-shadow);

  &.warningTheme {
    &:has(input[aria-invalid='true']) {
      color: var(--color-warning);
    }
  }

  &.defaultTheme {
    &:has(input[aria-invalid='true']) {
      color: var(--color-error);
    }
  }

  :deep(.inputWrapper) {
    display: block;
    width: 100%;

    input {
      width: 100%;
      background-color: var(--bg-field);
      color: inherit;
      font-weight: 500;
      border-color: var(--bg-field);

      &:focus {
        border: 1px solid var(--tertiary-50);
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
