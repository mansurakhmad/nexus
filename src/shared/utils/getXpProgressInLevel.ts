import { getLevelByXp } from './getLevelByXp';
import { getThresholdForLevel } from './getThresholdForLevel';

/**
 * @description Рассчитывает, сколько XP набрано именно внутри текущего уровня
 */
export const getXpProgressInLevel = (totalXp: number | bigint) => {
  const xp = Number(totalXp);
  const currentLevel = getLevelByXp(xp);
  const currentThreshold = getThresholdForLevel(currentLevel);
  return xp - currentThreshold;
};
