<script setup lang="ts">
import { computed } from 'vue';

import { Card } from 'primevue';

import { AnimatedWrapper } from '@/shared/ui';

const { password } = defineProps<{ password: string }>();

const rules = computed(() => [
  {
    id: 1,
    label: 'Minimum of 8 characters.',
    isDone: password.length >= 8,
  },
  {
    id: 2,
    label: 'At least one uppercase letter (A–Z).',
    isDone: /[A-Z]/.test(password),
  },
  {
    id: 3,
    label: 'At least one number (0–9).',
    isDone: /\d/.test(password),
  },
  {
    id: 4,
    label: 'At least one special character (e.g., ! # % $).',
    isDone: /[!#%$]/.test(password),
  },
]);
</script>

<template>
  <AnimatedWrapper theme="Blue">
    <Transition name="fade" appear>
      <Card class="rulesList">
        <template #title>Password Requirements:</template>
        <template #content>
          <ul class="rules">
            <li v-for="rule in rules" :key="rule.id" class="rule">
              <p class="label">- {{ rule.label }}</p>
              <i v-if="rule.isDone" class="pi pi-check"></i>
              <i v-else class="pi pi-times"></i>
            </li>
          </ul>
        </template>
      </Card>
    </Transition>
  </AnimatedWrapper>
</template>

<style lang="scss" scoped>
.rulesList {
  width: 100%;
  background: linear-gradient(
    180deg,
    var(--neutral-70) 0%,
    var(--neutral-80) 50%,
    var(--neutral-90) 100%
  );

  &:deep(.p-card-title) {
    border-bottom: 1px solid var(--primary-1);
    padding-bottom: 6px;
  }

  &:deep(.pi-check) {
    color: var(--tertiary-30);
  }
}

.rules {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.rule {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;

  .label {
    font-size: 12px;
    line-height: 16px;
  }
}

.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  transition: all 1s ease-in-out;
  transition-delay: 0.75s;
}
</style>
