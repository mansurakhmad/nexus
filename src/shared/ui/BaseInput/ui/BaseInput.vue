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

  label {
    color: inherit !important;
  }
}
</style>
