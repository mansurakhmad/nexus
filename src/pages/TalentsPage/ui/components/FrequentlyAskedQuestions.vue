<script setup lang="ts">
import { ref } from 'vue';

import { Accordion, AccordionPanel, AccordionHeader, AccordionContent } from 'primevue';

import { BaseContainer, BaseHeading, BaseText, BaseToggleButton } from '@/shared/ui';

const isExpanded = ref(false);

const accordionData = [
  {
    header: 'What are Talents and why do I need them?',
    body: 'Talents are powerful passive and active modifiers that shape your unique playstyle. Investing in them allows you to maximize your Credit income, speed up your XP progression, and gain tactical advantages — such as freezing quiz timers or getting cashback on high-risk predictions.',
    id: 0,
  },
  {
    header: 'How do I unlock and upgrade a Talent?',
    body: 'Upgrading nodes in your Specialization Core requires balancing two main resources: 1) Talent Points (TP): You receive +1 TP every time you level up. 2) Credits (©): Activating and leveling up a node costs Credits. Higher tiers require heavier financial investments.',
    id: 1,
  },
  {
    header: 'What are the Tier requirements?',
    body: 'The talent tree is locked by tiers. To access deeper and more powerful branches (like Tier 2), you must first invest a specific amount of Talent Points into the starting Tier 1 nodes.',
    id: 2,
  },
  {
    header: 'What happens when I reach Level 10?',
    body: 'Level 10 is your ultimate milestone. Once you cross this threshold, the core triggers Choose Your Path mode and your global XP progression will temporarily pause. You will be asked to permanently unlock one of two elite specializations: The Bookmaker: Focused on high-stakes risk management, expanded betting limits, and tournament market domination. The Lorekeeper: Focused on archive mastery, hidden fighter database insights, and supreme quiz mechanics. Pro Tip: Choose your early builds wisely. The efficiency of your journey to the Level 10 milestone depends entirely on the nodes you activate right now.',
    id: 3,
  },
];
</script>

<template>
  <BaseContainer
    class="frequentlyAskedQuestions"
    flexValue="column"
    gapValue="normal"
    paddingValue="normal"
    radiusValue="normal"
  >
    <BaseContainer flexValue="row" flexJustifyValue="between" flexAlignValue="center">
      <BaseHeading level="h4">Specialization Core: FAQ</BaseHeading>
      <BaseToggleButton v-model="isExpanded" onLabel="Collapse" offLabel="Expand" size="small" />
    </BaseContainer>
    <Accordion v-show="isExpanded" class="questions">
      <AccordionPanel v-for="question in accordionData" :key="question.header" :value="question.id">
        <AccordionHeader>
          <BaseText>{{ question.header }}</BaseText>
        </AccordionHeader>
        <AccordionContent>
          <BaseText>{{ question.body }}</BaseText>
        </AccordionContent>
      </AccordionPanel>
    </Accordion>
  </BaseContainer>
</template>

<style lang="scss" scoped>
.frequentlyAskedQuestions {
  @include block-styles;
}

.questions {
  &:deep(.p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader) {
    background-color: var(--primary-30);
  }

  &:deep(.p-accordioncontent-content) {
    padding: 16px;
  }
}
</style>
