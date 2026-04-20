<script setup lang="ts">
import { BaseHeading } from '@/shared/ui';
import { RecoveryPasswordForm } from '@/widgets/RecoveryPasswordForm';
</script>

<template>
  <div class="recoveryPasswordPage">
    <Transition name="slide-down" appear>
      <BaseHeading level="h2" :class="'title'">Recovery Password</BaseHeading>
    </Transition>
    <RecoveryPasswordForm />
  </div>
</template>

<style lang="scss" scoped>
.recoveryPasswordPage {
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
