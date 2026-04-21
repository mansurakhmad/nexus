<script setup lang="ts">
import { computed, ref } from 'vue';

import { useUpdateUserAvatarMutation, useUserProfileQuery } from '@/features/user';
import { BaseIcon, useBaseAlertStore } from '@/shared/ui';

const localAvatar = ref<string | null>(null);

const { data: userData } = useUserProfileQuery();
const { mutate } = useUpdateUserAvatarMutation();
const { triggerAlert } = useBaseAlertStore();

const currentAvatar = computed(() => localAvatar.value || userData.value?.profileData.avatar_url);

const maxSizeInMB = 2;
const maxSizeInBytes = maxSizeInMB * 1024 * 1024;

const handleFileUpload = (event: Event) => {
  if (!userData.value?.id) return;

  const target = event.target as HTMLInputElement;
  const file = target.files?.[0];

  if (!file) return;

  if (file.size > maxSizeInBytes) {
    triggerAlert({
      closeTime: 4000,
      title: 'Upload failed',
      message: `File size exceeds ${maxSizeInMB} MB. Please choose a smaller file.`,
      theme: 'error',
    });

    target.value = '';
    return;
  }

  const reader = new FileReader();

  reader.onload = e => {
    localAvatar.value = e.target?.result as string;
  };

  reader.readAsDataURL(file);

  mutate({ file, userId: userData.value.id });
};
</script>

<template>
  <div class="userAvatar">
    <img v-if="currentAvatar" :src="currentAvatar" class="avatarImage" alt="user avatar" />
    <BaseIcon v-else name="user" sizeValue="extraLarge" class="icon" />
    <label class="uploadButton" v-tooltip.bottom="'Max size 2MB'">
      <input type="file" @change="handleFileUpload" accept="image/*" />
      <BaseIcon name="camera" sizeValue="xLarge" class="icon" />
    </label>
  </div>
</template>

<style lang="scss" scoped>
.userAvatar {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  background: linear-gradient(
    135deg,
    var(--neutral-70) 0%,
    var(--neutral-60) 20%,
    var(--neutral-50) 40%,
    var(--neutral-40) 60%,
    var(--neutral-30) 80%,
    var(--neutral-20) 100%
  );
  border-radius: 32px;

  .icon {
    color: var(--primary-1);
  }
}

.avatarImage {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 32px;
}

.uploadButton {
  position: absolute;
  right: -10%;
  bottom: -10%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background: linear-gradient(
    110deg,
    var(--tertiary-70) 0%,
    var(--tertiary-50) 25%,
    var(--tertiary-30) 50%,
    var(--tertiary-50) 75%,
    var(--tertiary-70) 100%
  );
  border-radius: 12px;
  cursor: pointer;

  input {
    width: 0;
    opacity: 0;
    cursor: pointer;
  }
}
</style>
