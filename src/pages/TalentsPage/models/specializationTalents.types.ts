import type { TalentsTypes } from '@/entities/User';
import type { SPECIALIZATIONS } from '@/shared/config';

export namespace SpecializationTalentsTypes {
  export interface Props {
    specializationTalents: Record<TalentsTypes.TalentsTiers, TalentsTypes.Model[]>;
    selectedSpecializationKey: SPECIALIZATIONS | null;
    currentSpecializationKey: SPECIALIZATIONS;
  }
}
