export enum APP_ROUTERS_NAMES {
  lOGIN = 'lOGIN',
  ENROLLMENT = 'ENROLLMENT',
  MAIN = 'MAIN',
  FORGOT_PASSWORD = 'FORGOT_PASSWORD',
  RECOVERY_PASSWORD = 'RECOVERY_PASSWORD',
  PROFILE = 'PROFILE',
  TALENTS = 'TALENTS',
}

export const APP_ROUTES = {
  [APP_ROUTERS_NAMES.lOGIN]: '/',
  [APP_ROUTERS_NAMES.ENROLLMENT]: '/enrollment',
  [APP_ROUTERS_NAMES.MAIN]: '/main',
  [APP_ROUTERS_NAMES.FORGOT_PASSWORD]: '/forgot-password',
  [APP_ROUTERS_NAMES.RECOVERY_PASSWORD]: '/recovery-password',
  [APP_ROUTERS_NAMES.PROFILE]: '/profile',
  [APP_ROUTERS_NAMES.TALENTS]: '/profile/talents',
} as const satisfies Record<APP_ROUTERS_NAMES, string>;

export const KEEP_USER_LOGIN = 'KEEP_USER_LOGIN';

export const PINIA_STORES_KEYS = {
  AUTH: 'auth',
};

export enum USER_TIRES {
  STANDARD = 'STANDARD',
  PREMIUM = 'PREMIUM',
  ENTERPRISE = 'ENTERPRISE',
}

export enum SPECIALIZATIONS {
  BOOKMAKER = 'BOOKMAKER',
  LOREKEEPER = 'LOREKEEPER',
}

export type TalentType = SPECIALIZATIONS | 'CORE';

export const BASE_XP = 60;
export const MULTIPLIER = 1.2;
