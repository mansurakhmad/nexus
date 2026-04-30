import { toTypedSchema } from '@vee-validate/zod';
import { useFieldError, useForm } from 'vee-validate';

import { enrollmentFormSchema, EnrollmentFormFields } from '../models';

export const useEnrollmentForm = () => {
  const { defineField, errors, values, resetForm, handleSubmit } = useForm({
    validateOnMount: false,
    validationSchema: toTypedSchema(enrollmentFormSchema),
    initialValues: { email: '', password: '', confirmPassword: '' },
  });

  const [email, emailAttr] = defineField(EnrollmentFormFields.EMAIL);
  const [password, passwordAttr] = defineField(EnrollmentFormFields.PASSWORD);
  const [confirmPassword, confirmPasswordAttr] = defineField(EnrollmentFormFields.CONFIRM_PASSWORD);

  const emailError = useFieldError(EnrollmentFormFields.EMAIL);
  const passwordError = useFieldError(EnrollmentFormFields.PASSWORD);
  const confirmPasswordError = useFieldError(EnrollmentFormFields.CONFIRM_PASSWORD);

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
    handleSubmit,
    handleFormValid,
    resetForm: () => resetForm(),
  };
};
