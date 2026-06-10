<script setup lang="ts">
import { ref } from 'vue';

import TalentElement from './TalentElement.vue';

import { AnimatedWrapper, BaseContainer, BaseHeading, BaseToggleButton } from '@/shared/ui';

const isExpanded = ref(true);

const coreTalents = [
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
  {
    iconName: 'heart',
    talentName: 'Safe Bet',
    description:
      'Serves as your weekly safety net, allowing you to reclaim up to 50% of your stake on a single high-risk or major tournament prediction.',
  },
];
</script>

<template>
  <BaseContainer class="talentsTreeWorkspace" paddingValue="normal" radiusValue="normal">
    <BaseContainer flexValue="row" flexJustifyValue="between" flexAlignValue="center">
      <BaseHeading level="h4">Core Talents</BaseHeading>
      <BaseToggleButton v-model="isExpanded" onLabel="Collapse" offLabel="Expand" size="small" />
    </BaseContainer>
    <BaseContainer
      v-show="isExpanded"
      class="talents"
      flexValue="row"
      flexJustifyValue="center"
      gapValue="extraLarge"
      flexAlignValue="center"
    >
      <template v-for="(talent, index) in coreTalents" :key="talent.iconName">
        <TalentElement v-bind="talent" class="baseTalent" :maxLevel="3" />
        <AnimatedWrapper v-if="index !== coreTalents.length - 1" theme="Blue" class="talentLine" />
      </template>
    </BaseContainer>
  </BaseContainer>
</template>

<style lang="scss" scoped>
.talentsTreeWorkspace {
  @include block-styles;
}

.talents {
  margin-top: 24px;
  padding-bottom: 32px;
}

.talentLine {
  width: 77px;
  height: 10px;
}
</style>
