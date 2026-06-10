<script setup lang="ts">
import SpecializationTalents from './SpecializationTalents.vue';
import { SpecializationCardTypes } from '../../models/specializationCard.types';

import { BaseButton, BaseContainer, BaseHeading, BaseText } from '@/shared/ui';

const { currentSpecializationKey, selectedSpecializationKey } =
  defineProps<SpecializationCardTypes.Props>();

defineEmits<SpecializationCardTypes.Events>();
</script>

<template>
  <BaseContainer
    :class="[
      'specializationCard',
      {
        disabled:
          selectedSpecializationKey && selectedSpecializationKey !== currentSpecializationKey,
        active: selectedSpecializationKey === currentSpecializationKey,
      },
    ]"
    flexValue="column"
    gapValue="large"
    alignValue="center"
    radiusValue="normal"
    paddingValue="large"
  >
    <BaseContainer flexValue="column" gapValue="normal" flexAlignValue="center">
      <BaseButton
        v-if="selectedSpecializationKey !== currentSpecializationKey"
        theme="primary"
        class="chooseSpecializationButton"
        :disabled="!!selectedSpecializationKey"
        @click="
          $emit(SpecializationCardTypes.EventNames.SELECT_SPECIALIZATION, currentSpecializationKey)
        "
      >
        Choose
      </BaseButton>
      <BaseContainer
        v-else
        flexValue="row"
        flexAlignValue="center"
        flexJustifyValue="center"
        paddingValue="normal"
        radiusValue="normal"
        class="activeSpecLabel"
      >
        <BaseText weight="bold">Active spec</BaseText>
      </BaseContainer>
      <BaseHeading level="h4" fontSize="medium">{{ title }}</BaseHeading>
    </BaseContainer>
    <BaseContainer>
      <SpecializationTalents
        :specializationTalents="talents"
        :selectedSpecializationKey="selectedSpecializationKey"
        :currentSpecializationKey="currentSpecializationKey"
      />
    </BaseContainer>
  </BaseContainer>
</template>

<style lang="scss" scoped>
.specializationCard {
  @include block-styles;

  border-top: 4px solid transparent;
  transition: all 0.5s ease-in-out;

  &.disabled {
    opacity: 0.35;
  }

  &.active {
    border-top: 4px solid var(--primary-20);
  }
}

.chooseSpecializationButton {
  max-width: 180px;
  text-transform: uppercase;
}

.activeSpecLabel {
  max-width: 140px;
  text-transform: uppercase;
  background: var(--primary-20);
  color: var(--text-color);
}
</style>
