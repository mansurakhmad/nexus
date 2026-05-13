<script setup lang="ts">
import { ConfirmDialog } from 'primevue';
import { useConfirm } from 'primevue/useconfirm';

import { TalentsBlock } from './components';

import { useLogoutMutation } from '@/features/user';
import { useDeleteUserMutation, useUserProfileQuery } from '@/features/user';
import { BaseContainer, BaseHeading, BaseIcon, BaseText } from '@/shared/ui';
import BaseButton from '@/shared/ui/BaseButton/ui/BaseButton.vue';
import { LevelProgressTracker } from '@/widgets/LevelProgressTracker';
import { ProfileForm } from '@/widgets/ProfileForm';
import { UserCard } from '@/widgets/UserCard';

const { deleteUser } = useDeleteUserMutation();
const { logout } = useLogoutMutation();
const { data: userData } = useUserProfileQuery();

const confirm = useConfirm();

const confirmDelete = () => {
  confirm.require({
    message:
      'This will permanently delete your account. Are you sure you want to delete the account?',
    header: 'Delete Confirmation',
    icon: 'pi pi-exclamation-triangle',
    acceptClass: 'p-button-danger',
    acceptLabel: 'Yes',
    rejectLabel: 'No',

    accept: () => {
      if (!userData.value) return;

      deleteUser(userData.value.id, {
        onSuccess: () => logout(true),
      });
    },
  });
};
</script>

<template>
  <div class="profilePage">
    <div class="heading">
      <BaseHeading level="h1" fontSize="extraLarge" weight="bold">ACCOUNT SETUP</BaseHeading>
      <BaseHeading level="h4">Complete it to enter the game.</BaseHeading>
    </div>
    <BaseContainer class="overview" flexValue="row" gapValue="extraLarge">
      <UserCard />
      <LevelProgressTracker />
      <TalentsBlock />
    </BaseContainer>
    <div class="profileFormWrapper">
      <BaseHeading level="h2" class="formHeading" transform="uppercase">
        Account configuration
      </BaseHeading>
      <ProfileForm />
    </div>
    <BaseButton theme="transparent" @click="confirmDelete" class="deleteButton">
      Delete Account
    </BaseButton>
    <ConfirmDialog>
      <template #container="{ message, acceptCallback, rejectCallback }">
        <div class="deleteConfirmDialog">
          <header class="header">
            <BaseIcon :name="message.icon" sizeValue="large" class="icon" />
            <BaseHeading level="h4" fontSize="medium">{{ message.header }}</BaseHeading>
          </header>
          <div class="body">
            <BaseText>{{ message.message }}</BaseText>
          </div>
          <footer class="footer">
            <BaseButton @click="rejectCallback" theme="secondary">
              {{ message.rejectLabel }}
            </BaseButton>
            <BaseButton @click="acceptCallback" class="primary">
              {{ message.acceptLabel }}
            </BaseButton>
          </footer>
        </div>
      </template>
    </ConfirmDialog>
  </div>
</template>

<style lang="scss" scoped>
.profilePage {
  display: flex;
  flex-direction: column;
  gap: 68px;
  width: 100%;
  padding-bottom: 64px;

  .deleteButton {
    color: var(--secondary-70);
  }
}

.heading {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 46px;
}

.overview {
  @include max-extra-small-desktop {
    flex-wrap: wrap;
  }

  @include max-mobile {
    flex-direction: column !important;
  }
}

.profileFormWrapper {
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
  margin-top: 24px;

  .formHeading {
    text-align: center;
  }
}

.deleteConfirmDialog {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px;
  max-width: 488px;

  .header {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .icon {
    color: var(--primary-40);
  }

  .footer {
    display: flex;
    justify-content: space-around;
    gap: 16px;
    width: 100%;

    button {
      width: 100%;
    }
  }
}
</style>
