<script setup lang="ts">
import { Carousel } from 'primevue';

import { APP_ROUTES } from '@/shared/config';
import { BaseContainer, BaseText, BaseHeading } from '@/shared/ui';

const sliders = [
  {
    id: 1,
    key: 'bookmaker',
    link: APP_ROUTES.TALENTS,
    title: 'MASTER THE ART OF THE BET',
    description:
      'Elevate your strategy with the Bookmaker specialization. Unlock advanced skills to maximize your betting performance!',
  },
  {
    id: 2,
    link: APP_ROUTES.TALENTS,
    key: 'lorekeeper',
    title: 'THE LOREKEEPER. KNOWLEDGE UNBOUND',
    description: `Master the world's hidden intelligence. Unlock access to secrets about this world that you've never known before!`,
  },
];
</script>

<template>
  <Transition name="fadeMove" appear>
    <BaseContainer
      class="talentsBlock"
      paddingValue="normal"
      radiusValue="normal"
      flexValue="column"
      gapValue="extraLarge"
    >
      <Carousel :value="sliders" :circular="true" :showNavigators="false" class="carouselOverview">
        <template #item="slotProps">
          <RouterLink :to="slotProps.data.link" :class="[slotProps.data.key, 'link']">
            <BaseContainer
              flexValue="column"
              gapValue="large"
              paddingValue="normal"
              class="content"
            >
              <BaseHeading level="h3" transform="uppercase" fontSize="large">
                {{ slotProps.data.title }}
              </BaseHeading>
              <BaseText class="description">
                {{ slotProps.data.description }}
              </BaseText>
            </BaseContainer>
          </RouterLink>
        </template>
      </Carousel>
    </BaseContainer>
  </Transition>
</template>

<style lang="scss" scoped>
.talentsBlock {
  justify-content: space-between;

  @include block-styles;

  &:deep(.p-carousel-indicator-list) {
    position: absolute;
    bottom: 5%;

    @include max-mobile {
      left: 5%;
      padding-left: 0;
    }
  }

  &:deep(.p-carousel-indicator-active) {
    .p-carousel-indicator-button {
      background: var(--secondary-60);
    }
  }
}

.link {
  position: relative;
  display: flex;
  justify-content: flex-start;
  height: 348px;
  background-size: cover;

  &.bookmaker {
    background-image: url('@/shared/assets/bookmaker_banner.jpg');

    .content {
      width: 50%;
      min-width: 250px;
      background-color: rgb(48 48 49 / 10%);
      backdrop-filter: blur(5px);
    }
  }

  &.lorekeeper {
    background-image: url('@/shared/assets/lorekeeper_banner.jpg');

    @include max-extra-small-desktop {
      background-position: center;
    }

    .content {
      width: 300px;
    }
  }

  .content {
    position: absolute;
    margin: 0;
    height: 348px;
    overflow: hidden;
  }
}

.banner {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.fadeMove-enter-active {
  transition: all 1s ease-in-out;
}

.fadeMove-enter-from {
  opacity: 0;
  transform: translateY(-200px);
}
</style>
