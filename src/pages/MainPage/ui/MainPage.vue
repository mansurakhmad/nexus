<script setup lang="ts">
import { useAppConfigQuery } from '@/features/appConfig';
import { APP_FLOWS, APP_ROUTES } from '@/shared/config';
import { AnimatedWrapper, BaseButton } from '@/shared/ui';

const { config, isLoading } = useAppConfigQuery();
</script>

<template>
  <div class="mainPage" v-if="!isLoading">
    <AnimatedWrapper theme="Blue" v-if="config?.availableFlows?.includes(APP_FLOWS.FITNESS)">
      <div>Fitness Lab</div>
    </AnimatedWrapper>

    <AnimatedWrapper theme="Gold" v-if="config?.availableFlows?.includes(APP_FLOWS.FINANCE)">
      <div class="finTech widget">
        <h3>FINANCE APPLICATION</h3>
        <BaseButton
          value="open"
          class="openFlowButton"
          @onClick="$router.push(APP_ROUTES.FINANCE)"
        />
      </div>
    </AnimatedWrapper>

    <AnimatedWrapper theme="Red" v-if="config?.availableFlows?.includes(APP_FLOWS.TASKS)">
      <div>Task Manager</div>
    </AnimatedWrapper>
  </div>
</template>

<style lang="scss" scoped>
.mainPage {
  display: grid;
  gap: 20px;
  width: 100%;
  height: calc(100vh - 150px);
  grid-template-columns: repeat(3, 1fr);
}

.widget {
  width: 100%;
}

.finTech {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
