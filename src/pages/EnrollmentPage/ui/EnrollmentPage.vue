<script setup lang="ts">
import { BaseHeading } from '@/shared/ui';
import { EnrollmentForm } from '@/widgets/EnrollmentForm';
</script>

<template>
  <div class="enrollmentPage">
    <Transition name="slide-down" appear>
      <BaseHeading level="h2" fontSize="medium">Create Account</BaseHeading>
    </Transition>
    <EnrollmentForm />
  </div>
</template>

<style lang="scss" scoped>
.enrollmentPage {
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
