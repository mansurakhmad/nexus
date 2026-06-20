import type { TalentsTypes } from '../models/talents.types';

export const coreTalents: TalentsTypes.Model[] = [
  {
    icon: 'sun',
    name: 'Analytical Mind',
    description:
      'Focus: Quizzes & Knowledge Base. Perk per level: Increases XP gained from correctly answered quizzes by +5% / +10% / +15%. Purpose: Accelerates early leveling for players who prefer testing their knowledge.',
    maxLevel: 3,
    id: 'analytical-mind',
  },
  {
    icon: 'sparkles',
    name: 'Scout’s Intuition',
    description:
      'Focus: Predictions & Betting. Perk per level: Grants a 3% / 6% / 10% Credit cashback on lost predictions. Purpose: Reduces the fear of making mistakes for beginners learning to analyze fighters.',
    maxLevel: 3,
    id: 'scouts-intuition',
  },
  {
    icon: 'shopping-bag',
    name: 'Fast Wallet',
    description:
      'Focus: Economy. Perk per level: Passive daily login bonus: +5 / +10 Credits. Purpose: Provides a reliable baseline capital, even if the user is temporarily inactive in quizzes.',
    maxLevel: 2,
    id: 'fast-wallet',
  },
  {
    icon: 'heart',
    name: 'Safe Bet',
    description:
      'Serves as your weekly safety net, allowing you to reclaim up to 50% of your stake on a single high-risk or major tournament prediction.',
    maxLevel: 2,
    id: 'safe-bet',
  },
];
