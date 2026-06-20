import type { TalentType } from '@/shared/config';

export namespace TalentsTypes {
  export enum TalentsTiers {
    first = '11 - 20',
    second = '21 - 30',
    third = '31 - 40',
  }
  export type Model = {
    icon: string;
    name: string;
    description: string;
    maxLevel: number;
    id: string;
  };

  export interface UserTalent {
    talent_id: string;
    current_level: number;
    type: TalentType;
  }
}
