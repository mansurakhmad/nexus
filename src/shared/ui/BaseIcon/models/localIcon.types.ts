import { LOCAL_ICONS } from '../config/localIcons';

export namespace LocalIconTypes {
  export type LocalIconTypes = keyof typeof LOCAL_ICONS;
  export interface Props {
    localIconName: LocalIconTypes;
    size?: number;
  }
}
