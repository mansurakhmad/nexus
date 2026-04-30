import { toTypedSchema } from '@vee-validate/zod';
import { useFieldError, useForm } from 'vee-validate';

import { forgotPasswordFormSchema, ForgotPasswordFormFields } from '../models';

export const useForgotPasswordForm = () => {
  const { defineField, handleSubmit, resetForm } = useForm({
    validationSchema: toTypedSchema(forgotPasswordFormSchema),
    validateOnMount: false,
    initialValues: { email: '' },
  });

  const [email, emailAttr] = defineField(ForgotPasswordFormFields.EMAIL);
  const emailError = useFieldError(ForgotPasswordFormFields.EMAIL);

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
