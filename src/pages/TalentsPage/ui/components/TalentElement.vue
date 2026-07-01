<script setup lang="ts">
import { computed } from 'vue';

import { Tag } from 'primevue';

import type { TalentElementTypes } from '../../models/talentElement.types';

import { useUserProfileQuery, useUserTalentUpdateMutation } from '@/features/user';
import {
  AnimatedWrapper,
  BaseButton,
  BaseContainer,
  BaseHeading,
  useBaseDrawerStore,
} from '@/shared/ui';

const { talentName, maxLevel, description, id, isBlocked, talentType = 'CORE' } =
  defineProps<TalentElementTypes.Props>();

const { triggerDrawer } = useBaseDrawerStore();

const { data: userData } = useUserProfileQuery();
const { updateUserTalent } = useUserTalentUpdateMutation();

const currentProgress = computed(() => {
  if (!userData.value?.talents.length) return 0;
  return (
    userData.value.talents.find(
      talent => talent.talent_id === id && talent.type === talentType
    )?.current_level || 0
  );
});

const isDisable = computed(() => {
  if (!userData.value?.profileData.talent_points || isBlocked) return true;

  return currentProgress.value === maxLevel;
});

const upTalentProgress = () => {
  console.log('upTalentProgress', userData.value?.profileData.talent_points);
  if (!userData.value || !userData.value.profileData.talent_points) return;

  const newLevel = currentProgress.value + 1 > maxLevel ? maxLevel : currentProgress.value + 1;
  const availablePoints = userData.value.profileData.talent_points - 1;

  updateUserTalent({
    talent_id: id,
    current_level: newLevel,
    type: talentType,
    user_id: userData.value.profileData.id || '',
    talent_points: availablePoints,
  });
};

const openDescription = () => triggerDrawer({ title: talentName, description, position: 'bottom' });
</script>

<template>
  <AnimatedWrapper class="talent" :theme="currentProgress === maxLevel ? 'Gold' : 'Blue'">
    <BaseContainer
      class="content"
      paddingValue="normal"
      flexValue="column"
      flexJustifyValue="between"
      gapValue="small"
    >
      <BaseHeading level="h3" fontSize="medium" class="name">{{ talentName }}</BaseHeading>
      <BaseContainer flexValue="column" flexJustifyValue="between" gapValue="small">
        <BaseButton
          v-if="currentProgress !== maxLevel"
          theme="primary"
          @click="upTalentProgress"
          :disabled="isDisable"
        >
          Upgrade {{ `${currentProgress} / ${maxLevel}` }}
        </BaseButton>
        <Tag v-else severity="success" class="completeTag">Completed</Tag>
        <BaseButton theme="neutral" @click="openDescription">Learn more</BaseButton>
      </BaseContainer>
    </BaseContainer>
  </AnimatedWrapper>
</template>

<style lang="scss" scoped>
.completeTag {
  padding: 14px 20px;
  background: var(--primary-20);
  border-radius: 100px;
  color: var(--primary-1);
}
</style>
