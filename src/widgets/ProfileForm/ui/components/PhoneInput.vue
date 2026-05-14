<script setup lang="ts">
import { computed } from 'vue';

import { FloatLabel, InputNumber } from 'primevue';
import { useField } from 'vee-validate';

import { ErrorMessage } from '@/shared/ui';

const phoneCodeField = useField<number>('phoneCode');
const phoneNumberField = useField<number>('phoneNumber');

const errorMessage = computed(() => {
  return phoneCodeField.errorMessage.value || phoneNumberField.errorMessage.value;
});
</script>

<template>
  <div class="phoneInput">
    <div class="fields">
      <FloatLabel class="wrapperCode">
        <label>Phone Code</label>
        <InputNumber
          class="code"
          v-model="phoneCodeField.value.value"
          :isValid="!phoneCodeField.errors.value.length"
          :useGrouping="false"
          :maxLength="4"
        />
      </FloatLabel>

      <FloatLabel class="wrapperNumber">
        <label>Mobile Phone</label>
        <InputNumber
          class="number"
          v-model="phoneNumberField.value.value"
          :isValid="!phoneNumberField.errors.value.length"
          :onlyDigits="true"
          :useGrouping="false"
        />
      </FloatLabel>
    </div>
    <ErrorMessage :message="errorMessage" v-if="errorMessage" />
  </div>
</template>

<style lang="scss" scoped>
.phoneInput {
  position: relative;

  &:deep(.p-inputnumber-input) {
    width: 100%;
    background-color: var(--bg-field);
    box-shadow: var(--field-box-shadow);
    color: var(--color-field-text);
    font-weight: 500;

    &:focus {
      border: 1px solid var(--tertiary-50);
    }
  }

  .fields {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .code {
    width: 120px;
    flex-shrink: 0;
  }

  .wrapperCode,
  .wrapperNumber {
    label {
      color: var(--color-field-text);
    }

    &:has(span[isvalid='false']) {
      &:deep(.p-inputtext) {
        border: 1px solid var(--color-error);
        color: var(--color-error);
      }

      label {
        color: var(--color-error);
        font-weight: 500;
      }
    }
  }

  .wrapperNumber,
  .number {
    width: 100%;
  }
}
</style>
