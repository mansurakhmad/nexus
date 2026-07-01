<script setup lang="ts">
import { ref } from 'vue';

import TalentElement from './TalentElement.vue';

import { coreTalents } from '@/entities/User';
import { BaseContainer, BaseHeading, BaseToggleButton } from '@/shared/ui';

const isExpanded = ref(true);
</script>

<template>
  <BaseContainer
    class="talentsTreeWorkspace"
    paddingValue="large"
    radiusValue="normal"
    gapValue="normal"
    flexValue="column"
  >
    <BaseContainer flexValue="row" flexJustifyValue="between" flexAlignValue="center">
      <BaseHeading level="h4">Core Talents</BaseHeading>
      <BaseToggleButton v-model="isExpanded" onLabel="Collapse" offLabel="Expand" size="small" />
    </BaseContainer>
    <BaseContainer
      v-show="isExpanded"
      class="talents"
      flexValue="row"
      flexJustifyValue="between"
      gapValue="extraLarge"
      flexAlignValue="stretch"
    >
      <TalentElement
        v-for="talent in coreTalents"
        :key="talent.icon"
        :iconName="talent.icon"
        :talentName="talent.name"
        :description="talent.description"
        :maxLevel="talent.maxLevel"
        :id="talent.id"
        class="coreTalent"
      />
    </BaseContainer>
  </BaseContainer>
</template>

<style lang="scss" scoped>
.talentsTreeWorkspace {
  @include block-styles;
}

.coreTalent {
  flex-basis: 20%;
}

.talentLine {
  width: 77px;
  height: 10px;
}
</style>
