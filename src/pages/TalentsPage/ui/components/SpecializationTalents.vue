<script setup lang="ts">
import { Accordion, AccordionPanel, AccordionHeader, AccordionContent } from 'primevue';

import TalentElement from './TalentElement.vue';

import type { SpecializationTalentsTypes } from '../../models/specializationTalents.types.ts';

import { TalentsTypes } from '@/entities/User';
import { useUserProfileQuery } from '@/features/user';
import { BaseContainer, BaseText } from '@/shared/ui';
import { getLevelByXp } from '@/shared/utils';

defineProps<SpecializationTalentsTypes.Props>();

const { data: userData } = useUserProfileQuery();

const bordersForTiers: Record<number, number> = {
  0: 11,
  1: 21,
  2: 31,
};
</script>

<template>
  <Accordion class="specializationTalents" :value="TalentsTypes.TalentsTiers.first">
    <AccordionPanel
      v-for="(talentsTier, key, i) in specializationTalents"
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
          class="list"
        >
          <TalentElement
            v-for="talent in talentsTier"
            :key="talent.id"
            :iconName="talent.icon"
            :talentName="talent.name"
            :description="talent.description"
            :maxLevel="talent.maxLevel"
            :id="talent.id"
            :talentType="currentSpecializationKey"
            :isBlocked="
              !selectedSpecializationKey ||
              selectedSpecializationKey !== currentSpecializationKey ||
              getLevelByXp(userData?.profileData.xp || 0) < (bordersForTiers[i] ?? 10)
            "
            class="talent"
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

.list {
  flex-wrap: wrap;

  .talent {
    flex: 1 1 180px;

    &:last-child {
      flex: 1 1 100%;
    }
  }
}
</style>
