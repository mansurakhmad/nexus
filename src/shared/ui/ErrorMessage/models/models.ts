export namespace ErrorMessageTypes {
  export type Themes = 'default' | 'warning';
  export interface Props {
    message: string;
    theme?: Themes;
  }
}
