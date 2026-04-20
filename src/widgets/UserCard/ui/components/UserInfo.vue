<script setup lang="ts">
import { computed } from 'vue';

import { useUserProfileQuery } from '@/features/user';
import { USER_TIRES } from '@/shared/config';
import { AnimatedWrapper, BaseText } from '@/shared/ui';
import { capitalizeFirstLetter } from '@/shared/utils';

const { data } = useUserProfileQuery();

const fullName = computed(
  () =>
    `${capitalizeFirstLetter(data.value?.profileData.first_name)} ${capitalizeFirstLetter(data.value?.profileData.last_name)}`
);
</script>

<template>
  <div class="userInfo" v-if="data && data.profileData">
    <h3 class="fullName">
      {{ fullName }}
    </h3>
    <div class="details">
      <AnimatedWrapper theme="Gold" class="tierWrapper">
        <BaseText tag="span" size="medium" class="tier">
          {{ data.profileData.tier || USER_TIRES.STANDARD }}
        </BaseText>
      </AnimatedWrapper>
      <BaseText v-if="data.profileData.position" tag="span" size="medium">
        {{ capitalizeFirstLetter(data.profileData.position) }}
      </BaseText>
      <BaseText v-if="data.profileData.location" tag="span" size="medium">
        {{ capitalizeFirstLetter(data.profileData.location) }}
      </BaseText>
      <BaseText v-if="data.email" tag="span" size="medium">
        {{ data.email }}
      </BaseText>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.userInfo {
  align-self: center;
}

.fullName {
  color: var(--primary-100);
  font-size: 32px;
  font-weight: 600;
  line-height: 40px;
}

.details {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 6px;

  .tierWrapper {
    border-radius: 100px;

    .tier {
      padding: 8px 12px;
      background-color: var(--secondary-50);
      border-radius: 100px;
      color: var(--white-100);
    }
  }
}
</style>
