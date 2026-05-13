import { BASE_XP, MULTIPLIER } from '../config';

export const getLevelByXp = (totalXp: number | bigint) => {
  const points = Number(totalXp);
  if (points < BASE_XP) return 1;

  // L = floor( log_m( (XP * (m - 1) / base) + 1 ) ) + 1
  const level = Math.log((points * (MULTIPLIER - 1)) / BASE_XP + 1) / Math.log(MULTIPLIER);
  return Math.floor(level) + 1;
};
