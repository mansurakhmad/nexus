import type { ButtonHTMLAttributes } from 'vue';

export namespace BaseButtonTypes {
  export type BaseButtonThemes = 'primary' | 'secondary' | 'tertiary' | 'outlined' | 'transparent';
  export interface Props {
    disabled?: boolean;
    value: string;
    theme?: BaseButtonThemes;
    type?: ButtonHTMLAttributes['type'];
  }
}
