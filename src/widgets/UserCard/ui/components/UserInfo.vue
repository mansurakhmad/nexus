<script setup lang="ts">
import { computed } from 'vue';

import { useUserProfileQuery } from '@/features/user';
import { AnimatedWrapper, BaseContainer, BaseHeading, BaseText } from '@/shared/ui';
import { capitalizeFirstLetter } from '@/shared/utils';

const { data } = useUserProfileQuery();

const fullName = computed(
  () =>
    `${capitalizeFirstLetter(data.value?.profileData.first_name)} ${capitalizeFirstLetter(data.value?.profileData.last_name)}`
);
</script>

<template>
  <Transition name="move-up" appear>
    <BaseContainer
      v-if="data && data.profileData"
      class="userInfo"
      paddingValue="normal"
      flexValue="column"
      gapValue="small"
    >
      <BaseContainer flexValue="row" gapValue="xSmall" class="header">
        <BaseHeading level="h3" class="fullName" weight="normal" fontSize="medium">
          {{ fullName }}
        </BaseHeading>
        <BaseText v-if="data.profileData.username" class="username" size="large" weight="semibold">
          {{ `@${capitalizeFirstLetter(data.profileData.username)}` }}
        </BaseText>
      </BaseContainer>
      <AnimatedWrapper theme="Gold" class="balanceWrapper">
        <BaseText tag="p" size="large" weight="semibold" class="balance">
          Your balance:
          <BaseText tag="span" size="xLarge" weight="bold" class="creditsValue">
            {{ data.profileData.balance }}
          </BaseText>
          credits
        </BaseText>
      </AnimatedWrapper>
    </BaseContainer>
  </Transition>
</template>

<style lang="scss" scoped>
.userInfo {
  position: absolute;
  z-index: 2;
  bottom: 0;
  background-color: rgb(48 48 49 / 70%);
  border-radius: 16px 16px 0 0;
  backdrop-filter: blur(10px);
}

.header {
  align-items: center;
}

.name {
  color: var(--primary-20);
}

.balanceWrapper {
  padding: 16px;
  overflow: hidden;
  width: max-content;

  .creditsValue {
    color: var(--primary-20);
  }
}

.move-up-enter-active {
  transition: all 2s ease;
}

.move-up-enter-from {
  transform: translateY(100%);
}
</style>
