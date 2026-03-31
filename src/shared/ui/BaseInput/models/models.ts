import type { ErrorMessageTypes } from '@/shared/ui/ErrorMessage';

export namespace BaseInputTypes {
  export interface Props {
    labelValue: string;
    isValid?: boolean;
    errorMessage?: string;
    errorTheme?: ErrorMessageTypes.Themes;
  }
}
