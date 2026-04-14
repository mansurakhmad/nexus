<script setup lang="ts">
import { ProfileForm } from '@/widgets/ProfileForm';
import { UserCard } from '@/widgets/UserCard';
</script>

<template>
  <div class="profilePage">
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
</style>
