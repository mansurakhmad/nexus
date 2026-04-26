import type { ButtonHTMLAttributes } from 'vue';

export namespace BaseButtonTypes {
  export type BaseButtonThemes =
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'outlined'
    | 'transparent'
    | 'neutral';
  export interface Props {
    disabled?: boolean;
    theme?: BaseButtonThemes;
    type?: ButtonHTMLAttributes['type'];
  }
}
