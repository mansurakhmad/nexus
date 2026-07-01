<script setup lang="ts">
import { computed } from 'vue';

import CoreTalents from './components/CoreTalents.vue';
import FrequentlyAskedQuestions from './components/FrequentlyAskedQuestions.vue';
import SpecializationCard from './components/SpecializationCard.vue';

import { bookmakerTalents, lorekeeperTalents } from '@/entities/User';
import {
  useUpdateUserSpecializationMutation,
  useUserProfileQuery,
} from '@/features/user';
import { SPECIALIZATIONS } from '@/shared/config';
import { BaseHeading, BaseContainer, AnimatedWrapper } from '@/shared/ui';

const { data: userData } = useUserProfileQuery();
const { updateUserSpecialization, isPending } = useUpdateUserSpecializationMutation();

const selectedSpecialization = computed(
  () => userData.value?.profileData?.specialization ?? null
);

const selectSpecialization = (specialization: SPECIALIZATIONS) => {
  const userId = userData.value?.profileData?.id;
  if (!userId || selectedSpecialization.value || isPending.value) return;

  updateUserSpecialization({ user_id: userId, specialization });
};
</script>

<template>
  <BaseContainer flexValue="column" gapValue="xLarge" class="talentsPage">
    <BaseContainer flexValue="column" class="heading">
      <BaseHeading level="h1" fontSize="extraLarge" weight="bold">Specialization Core</BaseHeading>
      <BaseHeading level="h4">Choose Your Path</BaseHeading>
    </BaseContainer>
    <CoreTalents />
    <BaseContainer flexValue="column" flexAlignValue="center" class="specializationsDivider">
      <AnimatedWrapper theme="Blue" class="top line" />
      <BaseHeading level="h4" fontSize="medium" class="title">Specialization fork</BaseHeading>
      <AnimatedWrapper theme="Red" class="bottom line" />
    </BaseContainer>
    <BaseContainer flexValue="row" flexJustifyValue="between" gapValue="extraLarge">
      <SpecializationCard
        :talents="bookmakerTalents"
        :currentSpecializationKey="SPECIALIZATIONS.BOOKMAKER"
        :selectedSpecializationKey="selectedSpecialization"
        :isSelectingSpecialization="isPending"
        @selectSpecialization="selectSpecialization"
        title="Bookmaker"
      />
      <SpecializationCard
        :talents="lorekeeperTalents"
        :currentSpecializationKey="SPECIALIZATIONS.LOREKEEPER"
        :selectedSpecializationKey="selectedSpecialization"
        :isSelectingSpecialization="isPending"
        @selectSpecialization="selectSpecialization"
        title="Lorekeeper"
      />
    </BaseContainer>
    <FrequentlyAskedQuestions />
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
  opacity: 0.5;

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
