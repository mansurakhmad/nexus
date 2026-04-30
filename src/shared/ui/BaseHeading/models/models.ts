export namespace BaseHeadingTypes {
  export interface Props {
    level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    theme?: 'primary' | 'secondary' | 'tertiary';
    transform?: 'uppercase' | 'lowercase' | 'capitalize';
    fontSize?: 'xSmall' | 'small' | 'medium' | 'large' | 'xLarge' | 'extraLarge';
    weight?: 'normal' | 'bold';
  }
}
