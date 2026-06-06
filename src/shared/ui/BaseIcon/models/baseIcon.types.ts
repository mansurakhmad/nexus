import type { LocalIconTypes } from './localIcon.types';

export namespace BaseIconTypes {
  type SizeValue = 'small' | 'medium' | 'large' | 'xLarge' | 'extraLarge';
  export interface Props extends Partial<LocalIconTypes.Props> {
    sizeValue?: SizeValue;
    name?: string;
  }
}
