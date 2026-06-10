import type { TalentsTypes } from '@/entities/User';
import type { SPECIALIZATIONS } from '@/shared/config';

export namespace SpecializationCardTypes {
  export enum EventNames {
    SELECT_SPECIALIZATION = 'selectSpecialization',
  }
  export interface Props {
    title: string;
    selectedSpecializationKey: SPECIALIZATIONS | null;
    currentSpecializationKey: SPECIALIZATIONS;
    talents: Record<TalentsTypes.TalentsTiers, TalentsTypes.Model[]>;
  }

  export interface Events {
    (e: EventNames.SELECT_SPECIALIZATION, value: SPECIALIZATIONS): void;
  }
}
