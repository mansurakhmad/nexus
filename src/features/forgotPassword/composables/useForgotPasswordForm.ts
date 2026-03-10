import { toTypedSchema } from '@vee-validate/zod';
import { useFieldError, useForm } from 'vee-validate';

import { ForgotPasswordForm, zodSchema } from '../models';

export const useForgotPasswordForm = () => {
  const { defineField, handleSubmit, resetForm } = useForm({
    validationSchema: toTypedSchema(zodSchema),
    validateOnMount: false,
    initialValues: { email: '' },
  });

  const [email, emailAttr] = defineField(ForgotPasswordForm.Fields.EMAIL);
  const emailError = useFieldError(ForgotPasswordForm.Fields.EMAIL);

  const handleFormValid = () => {
    if (Object.keys(emailError.value || {}).length) return false;

    return !!email.value;
  };

  return {
    email,
    emailAttr,
    emailError,
    handleSubmit,
    handleFormValid,
    resetForm: () => resetForm(),
  };
};
