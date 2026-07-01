import type { TalentType, SPECIALIZATIONS } from '@/shared/config';

export interface SendUpdateUserAvatarPayload {
  file: File;
  userId: string;
}

export interface SendUpdateUserTalentPayload {
  user_id: string;
  talent_id: string;
  current_level: number;
  type: TalentType;
  talent_points: number;
}

export interface SendUpdateUserLocationPayload {
  user_id: string;
  talent_points: number;
}

export interface SendUpdateUserSpecializationPayload {
  user_id: string;
  specialization: SPECIALIZATIONS;
}
