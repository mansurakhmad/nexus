import { toTypedSchema } from '@vee-validate/zod';
import { useFieldError, useForm } from 'vee-validate';

import { zodSchema, EnrollmentForm } from '../models';

export const useEnrollmentForm = () => {
  const { defineField, errors, values, resetForm } = useForm({
    validateOnMount: false,
    validationSchema: toTypedSchema(zodSchema),
    initialValues: { email: '', password: '', confirmPassword: '' },
  });

  const [email, emailAttr] = defineField(EnrollmentForm.Fields.EMAIL);
  const [password, passwordAttr] = defineField(EnrollmentForm.Fields.PASSWORD);
  const [confirmPassword, confirmPasswordAttr] = defineField(
    EnrollmentForm.Fields.CONFIRM_PASSWORD
  );

  const emailError = useFieldError(EnrollmentForm.Fields.EMAIL);
  const passwordError = useFieldError(EnrollmentForm.Fields.PASSWORD);
  const confirmPasswordError = useFieldError(EnrollmentForm.Fields.CONFIRM_PASSWORD);

  const handleFormValid = () => {
    if (Object.keys(errors.value).length) return false;

    return Object.values(values).every(Boolean);
  };

  return {
    email,
    emailAttr,
    emailError,
    password,
    passwordAttr,
    passwordError,
    confirmPassword,
    confirmPasswordAttr,
    confirmPasswordError,
    handleFormValid,
    resetForm: () => resetForm(),
  };
};
