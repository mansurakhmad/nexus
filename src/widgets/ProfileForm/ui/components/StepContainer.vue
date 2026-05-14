<script setup lang="ts">
import type { StepContainerTypes } from '../../models';

import { BaseText, BaseHeading, AnimatedWrapper } from '@/shared/ui';

const { heading, description, stepNumber } = defineProps<StepContainerTypes.Props>();
</script>

<template>
  <AnimatedWrapper theme="Blue" contentClass="stepContainer">
    <div class="header">
      <div class="stepNumber">{{ `0${stepNumber}` }}</div>
      <BaseHeading level="h3" class="heading">{{ heading }}</BaseHeading>
      <BaseText class="description" size="small">{{ description }}</BaseText>
    </div>
    <div class="body">
      <slot />
    </div>
  </AnimatedWrapper>
</template>

<style lang="scss" scoped>
:deep(.stepContainer) {
  gap: 0;

  @include max-mobile {
    flex-direction: column;
  }
}

.header {
  padding: 32px 16px;
  background: linear-gradient(
    0deg,
    var(--tertiary-70) 0%,
    var(--tertiary-80) 22%,
    var(--tertiary-90) 50%,
    var(--tertiary-100) 100%
  );
  flex-basis: 30%;
  border-right: 10px solid var(--primary-20);

  @include max-mobile {
    border-right: none;
    border-bottom: 5px solid var(--primary-20);
  }
}

.stepNumber {
  font-size: 56px;
  font-weight: 600;
  line-height: 40px;
  opacity: 0.35;
}

.heading {
  color: var(--primary-20);
  text-transform: uppercase;
}

.description {
  text-transform: uppercase;
}

.body {
  display: flex;
  align-items: center;
  padding: 32px 16px;
  width: 100%;
  background-color: var(--bg-form);
  flex-basis: 70%;

  & > * {
    width: 100%;
  }
}
</style>
