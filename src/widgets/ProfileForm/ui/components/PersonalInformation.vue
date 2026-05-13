<script setup lang="ts">
import { useField } from 'vee-validate';

import { ProfileFormFields } from '@/features/user';
import { BaseInput, BaseDatePicker, BaseSelect } from '@/shared/ui';

const genderOptions = [
  { name: 'Male', code: 'XY' },
  { name: 'Female', code: 'XX' },
];

const firstNameField = useField<string>(ProfileFormFields.FIRST_NAME);
const lastNameField = useField<string>(ProfileFormFields.LAST_NAME);
const { value: gender } = useField<string>(ProfileFormFields.GENDER);
</script>

<template>
  <div class="formContent">
    <BaseInput
      labelValue="First Name"
      v-model="firstNameField.value.value"
      :isValid="!firstNameField.errors.value.length"
      :errorMessage="firstNameField.errorMessage.value"
    />
    <BaseInput
      labelValue="Last Name"
      v-model="lastNameField.value.value"
      :isValid="!lastNameField.errors.value.length"
      :errorMessage="lastNameField.errorMessage.value"
      name="lastName"
    />
    <BaseDatePicker
      labelValue="Birthday"
      placeholder="Enter your birthday *"
      dateFormat="dd.mm.yy"
      :onlyPast="true"
      :maxDate="new Date('2020-01-01')"
    />
    <BaseSelect
      labelValue="Gender"
      v-model="gender"
      :options="genderOptions"
      optionLabel="name"
      optionValue="code"
      placeholderValue="Chose gender"
    />
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
  gap: 40px 16px;

  &:deep(.p-datepicker-input) {
    background-color: transparent;
  }

  @include max-tablet {
    grid-template-columns: 1fr;
  }
}
</style>
