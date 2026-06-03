<script setup lang="ts">
import TalentElement from './TalentElement.vue';

import { BaseContainer, BaseHeading } from '@/shared/ui';

const firstTierTalents = [
  {
    iconName: 'sun',
    talentName: 'Analytical Mind',
    description:
      'Focus: Quizzes & Knowledge Base. Perk per level: Increases XP gained from correctly answered quizzes by +5% / +10% / +15%. Purpose: Accelerates early leveling for players who prefer testing their knowledge.',
  },
  {
    iconName: 'sparkles',
    talentName: 'Scout’s Intuition',
    description:
      'Focus: Predictions & Betting. Perk per level: Grants a 3% / 6% / 10% Credit cashback on lost predictions. Purpose: Reduces the fear of making mistakes for beginners learning to analyze fighters.',
  },
  {
    iconName: 'shopping-bag',
    talentName: 'Fast Wallet',
    description:
      'Focus: Economy. Perk per level: Passive daily login bonus: +5 / +10 / +15 Credits. Purpose: Provides a reliable baseline capital, even if the user is temporarily inactive in quizzes.',
  },
];
</script>

<template>
  <BaseContainer class="talentsTreeWorkspace" paddingValue="normal" radiusValue="normal">
    <BaseHeading level="h4">Core Talents</BaseHeading>
    <BaseContainer class="talents" flexValue="row" flexJustifyValue="center" gapValue="extraLarge">
      <TalentElement v-for="talent in firstTierTalents" :key="talent.iconName" v-bind="talent" />
    </BaseContainer>
  </BaseContainer>
</template>

<style lang="scss" scoped>
.talentsTreeWorkspace {
  @include block-styles;
}

.talents {
  margin-top: 24px;
}
</style>
