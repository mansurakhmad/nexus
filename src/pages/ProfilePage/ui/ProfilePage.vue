<script setup lang="ts">
import { BaseHeading } from '@/shared/ui';
import { ProfileForm } from '@/widgets/ProfileForm';
import { UserCard } from '@/widgets/UserCard';
</script>

<template>
  <div class="profilePage">
    <div class="heading">
      <BaseHeading level="h1">ACCOUNT SETUP</BaseHeading>
      <BaseHeading level="h5">Complete it to enter the game.</BaseHeading>
    </div>
    <UserCard />
    <ProfileForm />
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
  width: 100%;
}
</style>
