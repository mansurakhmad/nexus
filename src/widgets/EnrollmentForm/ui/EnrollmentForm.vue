<script lang="ts" setup>
import { useEnrollmentMutation, useEnrollmentForm } from '@/features/enrollment';
import { BaseButton, BaseInput, PasswordField } from '@/shared/ui';
import { PasswordRules } from '@/widgets/PasswordRules';

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
  handleSubmit,
} = useEnrollmentForm();

const { enroll, closeAlert } = useEnrollmentMutation(resetForm);

const submitForm = handleSubmit(
  ({ email, password }) => {
    closeAlert();

    enroll({ email, password });
  },
  errors => console.log('onSubmit errors:', errors)
);
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
      <div class="passwordBlock">
        <PasswordRules :password="password || ''" />
        <div class="passwordFields">
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
        </div>
      </div>
      <div class="buttons">
        <BaseButton
          value="Create Account"
          class="button"
          type="submit"
          theme="accent"
          :disabled="!handleFormValid()"
        />
        <BaseButton value="Back" class="button" theme="noBorder" @onClick="$router.back()" />
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
  border-radius: 12px;
  color: var(--black-100);

  .passwordBlock {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  .passwordFields {
    display: flex;
    align-items: center;
    gap: 32px;
  }
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
