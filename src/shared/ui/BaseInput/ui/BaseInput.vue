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
  <FloatLabel class="baseInput">
    <InputText v-model="model" class="input" @blur="emit('blur')" :invalid="!isValid" />
    <label :class="[`${errorTheme}Theme`]">{{ labelValue }}</label>
    <ErrorMessage v-if="!isValid && errorMessage" :message="errorMessage" :theme="errorTheme" />
  </FloatLabel>
</template>

<style lang="scss" scoped>
.baseInput {
  .input {
    width: 100%;
    background-color: var(--glass-white);

    &:focus {
      border: 1px solid var(--gold-10);
    }
  }

  &:has(input:focus) {
    label {
      color: var(--gold-50);
    }
  }

  &:has(input[aria-invalid='true']) {
    label {
      font-weight: 500;

      &.warningTheme {
        color: var(--gold-50);
      }

      &.defaultTheme {
        color: var(--red-50);
      }
    }
  }
}
</style>
