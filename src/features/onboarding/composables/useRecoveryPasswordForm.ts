import { toTypedSchema } from '@vee-validate/zod';
import { useFieldError, useForm } from 'vee-validate';

import { RecoveryPasswordFormFields, recoveryPasswordFormSchema } from '../models';

export const useRecoveryPasswordForm = () => {
  const { defineField, handleSubmit, errors, values } = useForm({
    validateOnMount: false,
    validationSchema: toTypedSchema(recoveryPasswordFormSchema),
    initialValues: {
      [RecoveryPasswordFormFields.PASSWORD]: '',
      [RecoveryPasswordFormFields.CONFIRM_PASSWORD]: '',
    },
  });
  const [password, passwordAttr] = defineField(RecoveryPasswordFormFields.PASSWORD);
  const [confirmPassword, confirmPasswordAttr] = defineField(
    RecoveryPasswordFormFields.CONFIRM_PASSWORD
  );

  const passwordError = useFieldError(RecoveryPasswordFormFields.PASSWORD);
  const confirmPasswordError = useFieldError(RecoveryPasswordFormFields.CONFIRM_PASSWORD);

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
