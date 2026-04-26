<script setup lang="ts">
import { useConfirm } from 'primevue/useconfirm';

import { BaseHeading, BaseText } from '@/shared/ui';
import BaseButton from '@/shared/ui/BaseButton/ui/BaseButton.vue';
import { ProfileForm } from '@/widgets/ProfileForm';
import { UserCard } from '@/widgets/UserCard';

const confirm = useConfirm();
</script>

<template>
  <div class="profilePage">
    <div class="heading">
      <BaseHeading level="h1" fontSize="extraLarge">ACCOUNT SETUP</BaseHeading>
      <BaseHeading level="h5">Complete it to enter the game.</BaseHeading>
    </div>
    <UserCard />
    <div class="profileFormWrapper">
      <BaseHeading level="h2" class="formHeading" transform="uppercase">
        Account configuration
      </BaseHeading>
      <ProfileForm />
    </div>
    <BaseButton theme="transparent">Delete Account</BaseButton>
    <ConfirmDialog @confirm="confirm">
      <BaseText size="medium">Are you sure you want to delete your account?</BaseText>
    </ConfirmDialog>
  </div>
</template>

<style lang="scss" scoped>
.profilePage {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 44px;
  width: 100%;
  padding-bottom: 64px;
}

.heading {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 46px;
}

.profileFormWrapper {
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
  margin-top: 24px;

  .formHeading {
    width: max-content;
    font-weight: 600;
    border-bottom: 4px solid var(--primary-30);
    padding-bottom: 8px;
  }
}
</style>
