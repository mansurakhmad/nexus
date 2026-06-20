<script setup lang="ts">
import { ref } from 'vue';

import TalentElement from './TalentElement.vue';

import { coreTalents } from '@/entities/User';
import { AnimatedWrapper, BaseContainer, BaseHeading, BaseToggleButton } from '@/shared/ui';

const isExpanded = ref(true);
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
      <template v-for="(talent, index) in coreTalents" :key="talent.icon">
        <TalentElement
          :iconName="talent.icon"
          :talentName="talent.name"
          :description="talent.description"
          :maxLevel="talent.maxLevel"
          :id="talent.id"
          class="baseTalent"
        />
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
