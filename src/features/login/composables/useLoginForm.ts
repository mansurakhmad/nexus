import { toTypedSchema } from '@vee-validate/zod';
import { useFieldError, useForm } from 'vee-validate';

import { LoginForm, zodSchema } from '../models';

export const useLoginForm = () => {
  const { handleSubmit, errors, values, defineField } = useForm({
    validationSchema: toTypedSchema(zodSchema),
    validateOnMount: false,
    initialValues: {
      [LoginForm.Fields.EMAIL]: '',
      [LoginForm.Fields.PASSWORD]: '',
      [LoginForm.Fields.REMEMBER_ME]: false,
    },
  });

  const [email, emailAttr] = defineField(LoginForm.Fields.EMAIL, {
    validateOnBlur: true,
    validateOnModelUpdate: false,
  });

  const [password, passwordAttr] = defineField(LoginForm.Fields.PASSWORD);
  const [rememberMe] = defineField(LoginForm.Fields.REMEMBER_ME);

  const emailError = useFieldError(LoginForm.Fields.EMAIL);
  const passwordError = useFieldError(LoginForm.Fields.PASSWORD);

  const handleFormValid = () => {
    if (Object.keys(errors.value).length) return false;

    return [values.email, values.password].every(Boolean);
  };

  return {
    email,
    emailAttr,
    password,
    passwordAttr,
    rememberMe,
    errors,
    handleSubmit,
    handleFormValid,
    emailError,
    passwordError,
  };
};
