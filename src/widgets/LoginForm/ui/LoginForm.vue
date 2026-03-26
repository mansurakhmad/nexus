<script setup lang="ts">
import { watch } from 'vue';

import Dialog from 'primevue/dialog';
import { useRouter, useRoute } from 'vue-router';

import { useConfirmEnrollment } from '@/features/confirm';
import { useLoginForm, useLoginQuery } from '@/features/login';
import { APP_ROUTERS_NAMES, APP_ROUTES, KEEP_USER_LOGIN } from '@/shared/config';
import { BaseButton, BaseCheckbox, BaseInput, PasswordField, useBaseAlertStore } from '@/shared/ui';

const router = useRouter();
const route = useRoute();
const { triggerAlert } = useBaseAlertStore();
const { login, isPending } = useLoginQuery();

const {
  email,
  emailAttr,
  emailError,
  password,
  passwordAttr,
  passwordError,
  rememberMe,
  handleSubmit,
  handleFormValid,
} = useLoginForm();

useConfirmEnrollment(email);

watch(rememberMe, newValue => {
  localStorage.setItem(KEEP_USER_LOGIN, JSON.stringify(newValue));
});

watch(
  () => route.query,
  routeData => {
    if (routeData.email && !Array.isArray(routeData.email)) {
      email.value = routeData.email;

      if (routeData.from === APP_ROUTERS_NAMES.RECOVERY_PASSWORD) {
        triggerAlert({
          title: 'Success!',
          message: 'Password updated successfully.',
          closeTime: 5000,
        });
      }
      router.replace({ query: {} });
    }
  },
  { immediate: true }
);

const onSubmit = handleSubmit(
  values => login({ email: values.email || '', password: values.password || '' }),
  errors => console.log('onSubmit errors:', errors)
);
</script>

<template>
  <Transition name="slide-up" appear>
    <form class="loginForm" @submit.prevent="onSubmit">
      <div class="fields">
        <BaseInput
          labelValue="Email"
          v-model="email"
          v-bind="emailAttr"
          :isValid="!emailError"
          :errorMessage="emailError"
        />
        <PasswordField
          labelValue="Password"
          v-model="password"
          v-bind="passwordAttr"
          :isValid="!passwordError"
          :errorMessage="passwordError"
        />
      </div>
      <BaseCheckbox
        :label="'Remember Me'"
        inputIdValue="rememberMe"
        v-model="rememberMe"
        class="rememberMe"
      />
      <BaseButton value="Login" theme="accent" type="submit" :disabled="!handleFormValid()" />
      <BaseButton
        value="Create Account"
        theme="noBorder"
        class="onboardingRouteButton"
        @onClick="$router.push(APP_ROUTES.ENROLLMENT)"
      />
      <BaseButton
        value="Forgot Password"
        theme="noBorder"
        class="onboardingRouteButton"
        @click="$router.push(APP_ROUTES.FORGOT_PASSWORD)"
      />
    </form>
  </Transition>

  <Dialog
    modal
    :closable="false"
    v-model:visible="isPending"
    style="background-color: transparent; border: none"
  >
    <span class="loader"></span>
  </Dialog>
</template>

<style lang="scss" scoped>
.loginForm {
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  border-radius: 12px;
  color: var(--black-100);

  .fields {
    display: flex;
    flex-direction: column;
    gap: 48px;
    margin-bottom: 12px;
  }

  .rememberMe {
    margin: 12px 0;
  }

  .onboardingRouteButton {
    margin: 0 auto;
    max-width: max-content;
  }
}

.slide-up-enter-active {
  transition: all 0.85s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(50%);
}
</style>
