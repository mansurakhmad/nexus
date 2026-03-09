<script lang="ts" setup>
import { useEnrollment, useEnrollmentForm } from '@/features/enrollment';
import { BaseButton, BaseInput, PasswordField } from '@/shared/ui';

const {
  email,
  emailAttr,
  emailError,
  password,
  passwordAttr,
  passwordError,
  confirmPassword,
  confirmPasswordAttr,
  confirmPasswordError,
  handleFormValid,
  resetForm,
} = useEnrollmentForm();

const { enroll, closeAlert } = useEnrollment(resetForm);

const submitForm = () => {
  closeAlert();

  enroll({ email: email.value!, password: password.value! });
};
</script>

<template>
  <Transition name="slide-up" appear>
    <form class="enrollmentForm" @submit.prevent="submitForm">
      <BaseInput
        labelValue="Email"
        v-model="email"
        v-bind="emailAttr"
        :isValid="!emailError"
        errorMessage="Invalid email"
      />
      <PasswordField
        labelValue="Password"
        v-model="password"
        v-bind="passwordAttr"
        :isValid="!passwordError"
      />
      <PasswordField
        labelValue="Confirm password"
        v-model="confirmPassword"
        v-bind="confirmPasswordAttr"
        :isValid="!confirmPasswordError"
        :errorMessage="confirmPasswordError"
      />
      <div class="buttons">
        <BaseButton
          value="Create Account"
          class="button"
          type="submit"
          theme="accent"
          :disabled="!handleFormValid()"
        />
        <BaseButton value="Back" class="button" theme="secondary" @onClick="$router.back()" />
      </div>
    </form>
  </Transition>
</template>

<style lang="scss" scoped>
.enrollmentForm {
  display: flex;
  flex-direction: column;
  gap: 48px;
  width: 100%;
  max-width: 400px;
  border-radius: 12px;
  color: var(--black-100);
}

.buttons {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.slide-up-enter-active {
  transition: all 0.85s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(50%);
}
</style>
