<script setup lang="ts">
import { RecoveryPasswordForm } from '@/widgets/RecoveryPasswordForm';
</script>

<template>
  <div class="recoveryPasswordPage">
    <Transition name="slide-down" appear>
      <h2>Recovery Password</h2>
    </Transition>
    <RecoveryPasswordForm />
  </div>
</template>

<style lang="scss" scoped>
.recoveryPasswordPage {
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
