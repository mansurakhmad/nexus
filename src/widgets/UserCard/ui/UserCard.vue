<script setup lang="ts">
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
</style>
