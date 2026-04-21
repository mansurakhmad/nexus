<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { Dialog } from 'primevue';

import { BaseHeading } from '../../BaseHeading';
import { BaseText } from '../../BaseText';
import { useBaseAlertStore } from '../store';

const alertStore = useBaseAlertStore();

const { alertData } = storeToRefs(alertStore);
</script>

<template>
  <Dialog
    class="baseDialog"
    position="bottom"
    :class="`${alertData?.theme}Theme`"
    :visible="!!alertData"
    :draggable="false"
    :closable="false"
    :pt="{ header: { style: 'padding: 16px 0 0' } }"
  >
    <div class="content">
      <BaseHeading level="h3" class="title">
        <slot name="title">{{ alertData?.title }}</slot>
      </BaseHeading>
      <BaseText tag="p" class="message">
        <slot name="message">{{ alertData?.message }}</slot>
      </BaseText>
    </div>
  </Dialog>
</template>

<style lang="scss">
.baseDialog.p-dialog {
  border: none;
  color: var(--primary-1);

  &.defaultTheme {
    background-color: var(--tertiary-100);
  }

  &.errorTheme {
    background-color: var(--secondary-70);

    .title {
      color: var(--primary-1);
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 8px;

    .title {
      font-size: 28px;
      line-height: 32px;
    }
  }
}
</style>
