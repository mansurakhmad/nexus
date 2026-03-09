import { toTypedSchema } from '@vee-validate/zod';
import { useFieldError, useForm } from 'vee-validate';

import { LoginForm, zodSchema } from '../models';

export const useLoginForm = () => {
  const { handleSubmit, errors, values, defineField } = useForm({
    validationSchema: toTypedSchema(zodSchema),
    validateOnMount: false,
    initialValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  });

  const [email, emailAttr] = defineField(LoginForm.Fields.EMAIL);
  const [password, passwordAttr] = defineField(LoginForm.Fields.PASSWORD);
  const [rememberMe] = defineField(LoginForm.Fields.REMEMBER_ME);

  const emailError = useFieldError(LoginForm.Fields.EMAIL);
  const passwordError = useFieldError(LoginForm.Fields.PASSWORD);

  const handleFormValid = () => {
    if (Object.keys(errors.value).length) return false;

    const valuesArr = [values.email, values.password];

    return valuesArr.every(Boolean);
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
