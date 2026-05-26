<script setup lang="ts">
import { FrequentlyAskedQuestions } from './components';

import { BaseHeading, BaseContainer } from '@/shared/ui';
</script>

<template>
  <BaseContainer flexValue="column" gapValue="xLarge">
    <BaseContainer flexValue="column" class="heading">
      <BaseHeading level="h1" fontSize="extraLarge" weight="bold">Specialization Core</BaseHeading>
      <BaseHeading level="h4">Choose Your Path</BaseHeading>
    </BaseContainer>

    <FrequentlyAskedQuestions />
  </BaseContainer>
</template>

<style lang="scss" scoped>
.heading {
  text-align: center;
}
</style>
