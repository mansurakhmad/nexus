import { BASE_XP, MULTIPLIER } from '../config';

/**
 * @description Получает суммарный XP, необходимый для достижения конкретного уровня
 */
export const getThresholdForLevel = (level: number) => {
  if (level <= 1) return 0;

  return Math.floor((BASE_XP * (Math.pow(MULTIPLIER, level - 1) - 1)) / (MULTIPLIER - 1));
};
