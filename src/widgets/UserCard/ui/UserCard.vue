<script setup lang="ts">
import { UserAvatar, UserInfo } from './components';

import { useUserProfileQuery } from '@/features/user';
import { BaseContainer } from '@/shared/ui';

const { data } = useUserProfileQuery();
</script>

<template>
  <BaseContainer v-if="data && data.profileData" class="userCard" flexValue="row" gapValue="xLarge">
    <UserAvatar />
    <UserInfo />
  </BaseContainer>
</template>

<style lang="scss" scoped>
.userCard {
  color: var(--neutral-100);
}
</style>
