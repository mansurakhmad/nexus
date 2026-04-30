<script setup lang="ts">
import { useRecoveryPasswordForm, useRecoveryPasswordMutation } from '@/features/onboarding';
import { PasswordField, BaseButton } from '@/shared/ui';
import { PasswordRules } from '@/widgets/PasswordRules';

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
      <PasswordRules :password="password || ''" />
      <PasswordField
        v-model="password"
        v-bind="passwordAttr"
        :isValid="!passwordError"
        labelValue="New password"
      />
      <PasswordField
        v-model="confirmPassword"
        v-bind="confirmPasswordAttr"
        :isValid="!confirmPasswordError"
        :errorMessage="confirmPasswordError"
        labelValue="Repeat new password"
      />
      <BaseButton type="submit" :disabled="!handleFormValid()" theme="primary">Submit</BaseButton>
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
