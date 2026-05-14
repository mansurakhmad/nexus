<script setup lang="ts">
import { DatePicker } from 'primevue';
import { useField } from 'vee-validate';

import type { BaseDatePickerTypes } from '../models';

import { ErrorMessage } from '@/shared/ui';

const { dateFormat, name, placeholder, onlyPast, maxDate } =
  defineProps<BaseDatePickerTypes.Props>();
const datepicker = useField<Date>('birthday');

const maxDateValue = onlyPast ? maxDate || new Date() : undefined;
</script>

<template>
  <div class="baseDatePicker">
    <DatePicker
      v-model="datepicker.value.value"
      :dateFormat="dateFormat"
      :placeholder="placeholder"
      :name="name"
      :maxDate="maxDateValue"
      fluid
    />
    <ErrorMessage
      v-if="datepicker.errors.value.length && datepicker.errorMessage.value"
      :message="datepicker.errorMessage.value"
    />
  </div>
</template>

<style lang="scss" scoped>
.baseDatePicker {
  position: relative;
  background-color: var(--bg-field);
  box-shadow: var(--field-box-shadow);

  &:deep(.p-datepicker-input) {
    color: var(--color-field-text);
    font-weight: 500;

    &:focus {
      border: 1px solid var(--tertiary-50);
    }

    &::placeholder {
      color: var(--color-field-text);
    }
  }
}
</style>
