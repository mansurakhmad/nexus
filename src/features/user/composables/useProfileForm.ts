import { watch } from 'vue';

import { toTypedSchema } from '@vee-validate/zod';
import { useForm } from 'vee-validate';

import { useUserProfileQuery } from './useUserProfileQuery';
import { zodSchema } from '../models';

export const useProfileForm = () => {
  const { data: savedProfileData } = useUserProfileQuery();

  const { handleSubmit, values, errors, resetForm } = useForm({
    validationSchema: toTypedSchema(zodSchema),
    validateOnMount: false,
  });

  watch(
    savedProfileData,
    () => {
      resetForm({
        values: {
          firstName: savedProfileData.value?.profileData.first_name || '',
          lastName: savedProfileData.value?.profileData.last_name || '',
          email: savedProfileData.value?.email || '',
          gender: savedProfileData.value?.profileData.gender || '',
          username: savedProfileData.value?.profileData.username || '',
          phoneCode: savedProfileData.value?.profileData.phone_code || undefined,
          phoneNumber: savedProfileData.value?.profileData.phone_number || undefined,
          birthday: savedProfileData.value?.profileData.birthday
            ? new Date(savedProfileData.value?.profileData.birthday)
            : undefined,
        },
      });
    },
    { immediate: true }
  );

  const handleFormValid = () => {
    if (Object.keys(errors.value).length) return false;

    return Object.values(values).every(Boolean);
  };

  return { handleSubmit, handleFormValid, resetForm };
};
