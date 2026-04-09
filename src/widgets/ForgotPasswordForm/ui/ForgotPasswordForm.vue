<script setup lang="ts">
import { useRouter } from 'vue-router';

import { useForgotPasswordMutation, useForgotPasswordForm } from '@/features/forgotPassword';
import { BaseButton, BaseInput } from '@/shared/ui';

const { email, emailAttr, emailError, handleSubmit, resetForm, handleFormValid } =
  useForgotPasswordForm();

const router = useRouter();
const { mutate } = useForgotPasswordMutation(resetForm);

const onSubmit = handleSubmit(
  values => mutate(values.email),
  errors => console.log('onSubmit errors:', errors)
);
</script>

<template>
  <Transition name="slide-up" appear>
    <form class="forgotPasswordForm" @submit.prevent="onSubmit">
      <BaseInput
        labelValue="Email"
        v-model="email"
        v-bind="emailAttr"
        :isValid="!emailError"
        :errorMessage="emailError"
      />
      <div class="buttons">
        <BaseButton value="Submit" theme="primary" type="submit" :disabled="!handleFormValid()" />
        <BaseButton value="Back" theme="transparent" @click="router.back()" />
      </div>
    </form>
  </Transition>
</template>

<style lang="scss" scoped>
.forgotPasswordForm {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 48px;
  width: 100%;
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
