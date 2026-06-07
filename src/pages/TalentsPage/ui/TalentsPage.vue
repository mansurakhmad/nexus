<script setup lang="ts">
import { ref } from 'vue';

import CoreTalents from './components/CoreTalents.vue';
import FrequentlyAskedQuestions from './components/FrequentlyAskedQuestions.vue';
import SpecializationCard from './components/SpecializationCard.vue';

import { SPECIALIZATIONS } from '@/shared/config';
import { BaseHeading, BaseContainer, AnimatedWrapper } from '@/shared/ui';

const selectedSpecialization = ref<SPECIALIZATIONS | null>(null);

const selectSpecialization = (specialization: SPECIALIZATIONS) => {
  selectedSpecialization.value = specialization;
};
</script>

<template>
  <BaseContainer flexValue="column" gapValue="xLarge" class="talentsPage">
    <BaseContainer flexValue="column" class="heading">
      <BaseHeading level="h1" fontSize="extraLarge" weight="bold">Specialization Core</BaseHeading>
      <BaseHeading level="h4">Choose Your Path</BaseHeading>
    </BaseContainer>
    <FrequentlyAskedQuestions />
    <CoreTalents />
    <BaseContainer flexValue="column" flexAlignValue="center" class="specializationsDivider">
      <AnimatedWrapper theme="Blue" class="top line" />
      <BaseHeading level="h4" fontSize="medium" class="title">Specialization fork</BaseHeading>
      <AnimatedWrapper theme="Blue" class="bottom line" />
    </BaseContainer>
    <BaseContainer flexValue="row" flexJustifyValue="between" gapValue="extraLarge">
      <SpecializationCard
        :currentSpecializationKey="SPECIALIZATIONS.BOOKMAKER"
        :selectedSpecializationKey="selectedSpecialization"
        @selectSpecialization="selectSpecialization"
        title="Bookmaker"
      />
      <SpecializationCard
        :currentSpecializationKey="SPECIALIZATIONS.LOREKEEPER"
        :selectedSpecializationKey="selectedSpecialization"
        @selectSpecialization="selectSpecialization"
        title="Lorekeeper"
      />
    </BaseContainer>
  </BaseContainer>
</template>

<style lang="scss" scoped>
.talentsPage {
  padding-bottom: 64px;
}

.heading {
  text-align: center;
}

.specializationsDivider {
  .line {
    width: 10px;
    height: 80px;
  }

  .title {
    margin: 16px auto;
    color: var(--neutral-40);
    text-align: center;
  }
}
</style>
