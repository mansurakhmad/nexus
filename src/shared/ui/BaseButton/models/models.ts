import type { ButtonHTMLAttributes } from 'vue';

export namespace BaseButtonTypes {
  export type BaseButtonThemes = 'primary' | 'secondary' | 'inverted' | 'outlined' | 'transparent';
  export interface Props {
    disabled?: boolean;
    value: string;
    theme?: BaseButtonThemes;
    type?: ButtonHTMLAttributes['type'];
  }
}
