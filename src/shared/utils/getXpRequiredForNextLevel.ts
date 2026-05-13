import { getThresholdForLevel } from './getThresholdForLevel';

export const getXpRequiredForNextLevel = (level: number) => {
  const currentThreshold = getThresholdForLevel(level);
  const nextThreshold = getThresholdForLevel(level + 1);
  return nextThreshold - currentThreshold;
};
