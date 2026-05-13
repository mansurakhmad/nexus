<script setup lang="ts">
import { StepContainer, PersonalInformation, ContactInformation, PlayInfo } from './components';

import { useProfileForm, useUpdateUserMutation } from '@/features/user';
import { BaseButton } from '@/shared/ui';

const { handleSubmit, resetForm, handleFormValid } = useProfileForm();
const { mutate } = useUpdateUserMutation();

const onSubmit = handleSubmit(
  values => mutate(values),
  errors => console.log('onSubmit errors:', errors)
);
</script>

<template>
  <form class="profileForm" @submit.prevent="onSubmit">
    <StepContainer :stepNumber="1" heading="Personal info" description="verified identity details">
      <PersonalInformation />
    </StepContainer>
    <StepContainer :stepNumber="2" heading="contact info" description="set your contact details">
      <ContactInformation />
    </StepContainer>
    <StepContainer
      :stepNumber="3"
      heading="Player info"
      description="Customize Your Player profile"
    >
      <PlayInfo />
    </StepContainer>
    <div class="stepButtons">
      <BaseButton class="button" theme="neutral" @click="resetForm">Discard changes</BaseButton>
      <BaseButton class="button" theme="primary" type="submit" :disabled="!handleFormValid()">
        Commit changes
      </BaseButton>
    </div>
  </form>
</template>

<style lang="scss" scoped>
.profileForm {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 40px 24px;
  width: 100%;
  border-radius: 24px;

  @include block-styles;
}

.stepButtons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  margin: 24px auto 0;
  width: max-content;

  @include max-mobile {
    flex-direction: column;
    width: 100%;
  }

  .button {
    width: 220px;

    @include max-extra-small-mobile {
      width: 100%;
    }
  }
}
</style>
