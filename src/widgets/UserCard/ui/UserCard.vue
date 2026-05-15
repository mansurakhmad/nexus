<script setup lang="ts">
import Skeleton from 'primevue/skeleton';

import { UserAvatar, UserInfo } from './components';

import { useUserProfileQuery } from '@/features/user';
import { BaseContainer } from '@/shared/ui';

const { data } = useUserProfileQuery();
</script>

<template>
  <BaseContainer
    v-if="data && data.profileData"
    class="userCard"
    flexValue="column"
    gapValue="xLarge"
    radiusValue="large"
  >
    <UserAvatar />
    <UserInfo />
  </BaseContainer>
  <BaseContainer
    v-else
    class="skeletonBlock"
    flexValue="column"
    gapValue="xLarge"
    paddingValue="normal"
    radiusValue="large"
  >
    <Skeleton height="250px" borderRadius="16px"></Skeleton>
    <BaseContainer flexValue="column" gapValue="xSmall">
      <Skeleton height="40px" borderRadius="8px"></Skeleton>
      <Skeleton height="28px" borderRadius="8px"></Skeleton>
    </BaseContainer>
  </BaseContainer>
</template>

<style lang="scss" scoped>
.userCard {
  position: relative;
  margin: 0;
  width: 380px;
  height: 380px;
  border-radius: 24px;
  overflow: hidden;
  flex-shrink: 0;

  @include block-styles;

  @include max-mobile {
    width: 100%;
    height: 480px;
  }
}

.skeletonBlock {
  width: 380px;
  height: 380px;
  flex-shrink: 0;

  @include block-styles;
}
</style>
