<script setup lang="ts">
import RulesList from './RulesList.vue';

import { useRecoveryPasswordForm, useRecoveryPasswordMutation } from '@/features/recoveryPassword';
import { PasswordField, BaseButton } from '@/shared/ui';

const {
  password,
  passwordAttr,
  confirmPassword,
  confirmPasswordAttr,
  handleSubmit,
  passwordError,
  confirmPasswordError,
  handleFormValid,
} = useRecoveryPasswordForm();

const { recoverPassword } = useRecoveryPasswordMutation();

const submit = handleSubmit(
  ({ password }) => recoverPassword(password),
  errors => console.log('onSubmit errors:', errors)
);
</script>

<template>
  <Transition name="slide-up" appear>
    <form class="recoveryPasswordForm" @submit.prevent="submit">
      <RulesList :password="password || ''" />
      <PasswordField
        labelValue="New password"
        :isValid="!passwordError"
        v-model="password"
        v-bind="passwordAttr"
      />
      <PasswordField
        v-model="confirmPassword"
        v-bind="confirmPasswordAttr"
        :isValid="!confirmPasswordError"
        :errorMessage="confirmPasswordError"
        labelValue="Repeat new password"
      />
      <BaseButton value="Submit" type="submit" :disabled="!handleFormValid()" theme="accent" />
    </form>
  </Transition>
</template>

<style lang="scss" scoped>
.recoveryPasswordForm {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 44px;
  width: 100%;
  max-width: 400px;
  border-radius: 12px;
  color: var(--black-100);
}

.slide-up-enter-active {
  transition: all 0.85s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(50%);
}
</style>
