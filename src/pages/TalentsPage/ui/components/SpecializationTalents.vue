<script setup lang="ts">
import { Accordion, AccordionPanel, AccordionHeader, AccordionContent } from 'primevue';

import TalentElement from './TalentElement.vue';

import type { SpecializationTalentsTypes } from '../../models/specializationTalents.types.ts';

import { TalentsTypes } from '@/entities/User';
import { BaseContainer, BaseText } from '@/shared/ui';

defineProps<SpecializationTalentsTypes.Props>();
</script>

<template>
  <Accordion class="specializationTalents" :value="TalentsTypes.TalentsTiers.first">
    <AccordionPanel
      v-for="(talentsTier, key) in specializationTalents"
      :key="key"
      :value="key"
      :disabled="
        !!selectedSpecializationKey && selectedSpecializationKey !== currentSpecializationKey
      "
    >
      <AccordionHeader>
        <BaseText>{{ key }}</BaseText>
      </AccordionHeader>
      <AccordionContent class="talentsTier">
        <BaseContainer
          flexValue="row"
          flexJustifyValue="around"
          gapValue="large"
          paddingValue="large"
        >
          <TalentElement
            v-for="talent in talentsTier"
            :key="talent.id"
            :iconName="talent.icon"
            :talentName="talent.name"
            :description="talent.description"
            :maxLevel="talent.maxLevel"
            :isBlocked="
              !selectedSpecializationKey || selectedSpecializationKey !== currentSpecializationKey
            "
          />
        </BaseContainer>
      </AccordionContent>
    </AccordionPanel>
  </Accordion>
</template>

<style lang="scss" scoped>
.specializationTalents {
  &:deep(.p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader) {
    background-color: var(--primary-30);
  }
}
</style>
