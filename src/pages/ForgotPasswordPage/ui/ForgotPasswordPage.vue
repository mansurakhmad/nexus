<script setup lang="ts">
import { BaseHeading } from '@/shared/ui';
import { ForgotPasswordForm } from '@/widgets/ForgotPasswordForm';
</script>

<template>
  <div class="forgotPasswordPage">
    <Transition name="slide-down" appear>
      <BaseHeading level="h2" fontSize="medium">Forgot Password</BaseHeading>
    </Transition>
    <ForgotPasswordForm />
  </div>
</template>

<style lang="scss" scoped>
.forgotPasswordPage {
  display: flex;
  flex-direction: column;
  gap: 44px;
}

.slide-down-enter-from {
  transform: translateY(-200%);
  opacity: 0;
}

.slide-down-enter-active {
  transition: all 0.5s ease-in-out;
}
</style>
