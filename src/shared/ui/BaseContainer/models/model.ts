export namespace BaseContainer {
  export interface Props {
    sizeValue?: 'small' | 'normal' | 'large' | 'full';
    flexValue?: 'row' | 'column';
    paddingValue?: 'normal' | 'none';
    gapValue?: 'xSmall' | 'small' | 'normal' | 'large' | 'xLarge' | 'extraLarge' | 'none';
    radiusValue?: 'small' | 'normal' | 'large';
    flexJustifyValue?: 'center' | 'start' | 'end' | 'between' | 'around';
    flexAlignValue?: 'center' | 'start' | 'end';
  }
}
