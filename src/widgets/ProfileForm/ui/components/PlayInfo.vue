<script setup lang="ts">
import { useField } from 'vee-validate';

import { ProfileFormFields } from '@/features/user';
import { BaseInput } from '@/shared/ui';

const usernameField = useField<string>(ProfileFormFields.USERNAME);
</script>

<template>
  <div class="formContent">
    <BaseInput
      labelValue="Username"
      v-model="usernameField.value.value"
      :isValid="!usernameField.errors.value.length"
      :errorMessage="usernameField.errorMessage.value"
      name="username"
    />
  </div>
</template>
