<script setup lang="ts">
import { useField } from 'vee-validate';

import PhoneInput from './PhoneInput.vue';

import { ProfileFormFields } from '@/features/user';
import { BaseInput } from '@/shared/ui';

const emailField = useField<string>(ProfileFormFields.EMAIL);
</script>

<template>
  <div class="formContent">
    <BaseInput
      labelValue="Email"
      v-model="emailField.value.value"
      :isValid="!emailField.errors.value.length"
      :errorMessage="emailField.errorMessage.value"
    />
    <PhoneInput />
  </div>
</template>

<style lang="scss" scoped>
:deep(.step) {
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding-bottom: 16px;
}

.formContent {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;

  @include max-tablet {
    grid-template-columns: 1fr;
    gap: 40px 16px;
  }
}
</style>
