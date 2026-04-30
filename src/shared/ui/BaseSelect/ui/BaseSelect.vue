<script setup lang="ts">
import { Select } from 'primevue';

import type { BaseSelectTypes } from '../models.ts';

const { placeholderValue, optionLabel, optionValue, options } =
  defineProps<BaseSelectTypes.Props>();

const model = defineModel<string>();
</script>

<template>
  <div class="baseSelect">
    <Select
      v-model="model"
      :options="options"
      :highlightOnSelect="false"
      :pt="{ label: { style: 'text-align: left' } }"
      :optionValue="optionValue"
      :optionLabel="optionLabel"
      :placeholder="placeholderValue"
      checkmark
      fluid
    />
  </div>
</template>

<style lang="scss" scoped>
.baseSelect {
  &:deep(.p-select) {
    background-color: transparent;
    font-weight: 500;
  }

  &:deep(.p-select:not(.p-disabled).p-focus) {
    border: 1px solid var(--primary-100);
  }

  &:deep(.p-select-label) {
    color: var(--primary-100);
  }
}
</style>
