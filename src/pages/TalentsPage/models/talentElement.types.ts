import type { TalentType } from '@/shared/config';

export namespace TalentElementTypes {
  export interface Props {
    iconName: string;
    talentName: string;
    description: string;
    maxLevel: number;
    isBlocked?: boolean;
    id: string;
    talentType?: TalentType;
  }
}
