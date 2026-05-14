<script lang="ts" setup>
import FloatLabel from 'primevue/floatlabel';
import InputText from 'primevue/inputtext';

import type { BaseInputTypes } from '../models';

import { ErrorMessage } from '@/shared/ui/ErrorMessage';

const {
  labelValue,
  isValid,
  errorMessage,
  errorTheme = 'default',
} = defineProps<BaseInputTypes.Props>();

const emit = defineEmits(['blur']);
const model = defineModel<string>();
</script>

<template>
  <FloatLabel :class="['baseInput', `${errorTheme}Theme`]">
    <InputText v-model="model" class="input" @blur="emit('blur')" :invalid="!isValid" />
    <label>{{ labelValue }}</label>
    <ErrorMessage v-if="!isValid && errorMessage" :message="errorMessage" :theme="errorTheme" />
  </FloatLabel>
</template>

<style lang="scss" scoped>
.baseInput {
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

  label {
    color: inherit !important;
  }
}
</style>
