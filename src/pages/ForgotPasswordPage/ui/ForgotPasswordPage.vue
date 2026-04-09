<script setup lang="ts">
import { ForgotPasswordForm } from '@/widgets/ForgotPasswordForm';
</script>

<template>
  <div class="forgotPasswordPage">
    <Transition name="slide-down" appear>
      <h2>Forgot Password</h2>
    </Transition>
    <ForgotPasswordForm />
  </div>
</template>

<style lang="scss" scoped>
.forgotPasswordPage {
  display: flex;
  flex-direction: column;
  gap: 44px;

  h2 {
    color: var(--primary-80);
  }
}

.slide-down-enter-from {
  transform: translateY(-200%);
  opacity: 0;
}

.slide-down-enter-active {
  transition: all 0.5s ease-in-out;
}
</style>
