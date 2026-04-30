<script lang="ts" setup>
import { ref } from 'vue';

import { Popover } from 'primevue';
import { useRouter } from 'vue-router';

import { useLogoutMutation } from '@/features/user';
import { useUserProfileQuery } from '@/features/user';
import { APP_ROUTERS_NAMES, APP_ROUTES } from '@/shared/config';
import { BaseButton, BaseText } from '@/shared/ui';

const router = useRouter();
const { logout } = useLogoutMutation();
const { data: userData } = useUserProfileQuery();
const op = ref<InstanceType<typeof Popover> | null>(null);

const togglePopoverState = (event: PointerEvent) => {
  if (!op.value) return;

  op.value.toggle(event);
};

const goToProfilePage = () => {
  if (op.value) op.value.hide();

  router.push(APP_ROUTES.PROFILE);
};

const getName = () => {
  if (!userData.value) return '';

  if (userData.value.profileData.username) return userData.value.profileData.username;

  if (userData.value.profileData.first_name && userData.value.profileData.last_name) {
    return `${userData.value.profileData.first_name} ${userData.value.profileData.last_name}`;
  }

  return userData.value.email;
};
</script>

<template>
  <Transition name="fade" appear>
    <div class="userControl" v-if="userData && !$route.meta.isOnboarding">
      <BaseButton @click="togglePopoverState" theme="primary" class="popupTrigger">
        <img
          v-if="userData.profileData.avatar_url"
          :src="userData.profileData.avatar_url"
          class="avatar"
          alt="avatar"
        />
        <BaseText>{{ `Hi, ${getName()}` }}</BaseText>
      </BaseButton>
    </div>
  </Transition>
  <Popover ref="op" :close-on-escape="true">
    <div class="popupContent">
      <BaseButton
        v-if="$route.name !== APP_ROUTERS_NAMES.PROFILE"
        @click="goToProfilePage"
        theme="primary"
      >
        Personal Profile
      </BaseButton>
      <BaseButton theme="tertiary" @click="logout">Log out</BaseButton>
    </div>
  </Popover>
</template>

<style lang="scss" scoped>
.userControl {
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;

  .popupTrigger {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 12px;

    .avatar {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      overflow: hidden;
      object-fit: cover;
    }
  }
}

.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 0.8s ease-in;
}

.popupContent {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 8px;
}
</style>
