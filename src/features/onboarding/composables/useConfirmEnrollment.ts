import { computed, onMounted, type Ref } from 'vue';

import { useRoute } from 'vue-router';

import { useBaseAlertStore } from '@/shared/ui';

export const useConfirmEnrollment = (email: Ref<string | undefined>) => {
  const { triggerAlert } = useBaseAlertStore();
  const route = useRoute();

  const confirmationType = computed(() => route.query.type as string | undefined);
  const emailValue = computed(() => route.query.email as string | undefined);

  onMounted(async () => {
    if (confirmationType.value !== 'enrollment' && !emailValue.value) return;

    email.value = emailValue.value;

    triggerAlert({
      title: 'Success!',
      message: 'Registration was completed!',
      closeTime: 5000,
    });
  });
};
