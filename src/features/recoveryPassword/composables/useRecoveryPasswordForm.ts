import { toTypedSchema } from '@vee-validate/zod';
import { useFieldError, useForm } from 'vee-validate';

import { RecoveryPasswordForm, zodSchema } from '../models';

export const useRecoveryPasswordForm = () => {
  const { defineField, handleSubmit, errors, values } = useForm({
    validateOnMount: false,
    validationSchema: toTypedSchema(zodSchema),
    initialValues: {
      [RecoveryPasswordForm.FormFields.PASSWORD]: '',
      [RecoveryPasswordForm.FormFields.CONFIRM_PASSWORD]: '',
    },
  });
  const [password, passwordAttr] = defineField(RecoveryPasswordForm.FormFields.PASSWORD);
  const [confirmPassword, confirmPasswordAttr] = defineField(
    RecoveryPasswordForm.FormFields.CONFIRM_PASSWORD
  );

  const passwordError = useFieldError(RecoveryPasswordForm.FormFields.PASSWORD);
  const confirmPasswordError = useFieldError(RecoveryPasswordForm.FormFields.CONFIRM_PASSWORD);

  const handleFormValid = () => {
    if (Object.keys(errors.value).length) return false;

    return Object.values(values).every(Boolean);
  };

  return {
    handleSubmit,
    password,
    passwordAttr,
    confirmPassword,
    confirmPasswordAttr,
    passwordError,
    confirmPasswordError,
    handleFormValid,
  };
};
