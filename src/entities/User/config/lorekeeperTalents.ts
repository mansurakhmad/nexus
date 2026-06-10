import { TalentsTypes } from '../models/talents.types';

export const lorekeeperTalents: Record<TalentsTypes.TalentsTiers, TalentsTypes.Model[]> = {
  [TalentsTypes.TalentsTiers.first]: [
    {
      icon: 'crown',
      name: 'Methodical Research',
      description: 'Reduces the cooldown between accessing new themed quizzes.',
      maxLevel: 5,
      id: 'methodical-research',
    },
    {
      id: 'database-breach',
      icon: 'crown',
      name: 'Database Breach',
      description:
        'Unlocks hidden fighter statistics in the quiz or prediction interface (up to 3 times per day).',
      maxLevel: 3,
    },
    {
      id: 'chronicle-passive',
      icon: 'crown',
      name: 'Chronicle Passive',
      description:
        'Gives up to a 15% chance to instantly refund a quiz ticket or double the experience gained from it.',
      maxLevel: 5,
    },
  ],
  [TalentsTypes.TalentsTiers.second]: [
    {
      icon: 'crown',
      name: 'Archive Master',
      description:
        'Increases the Credit reward (up to +50%) for perfectly completing quizzes without a single error.',
      maxLevel: 5,
      id: 'archive-master',
    },
    {
      icon: 'crown',
      name: `Scholar's Privilege`,
      description:
        'Allows you to completely eliminate one incorrect answer option in expert-level quizzes once a day.',
      maxLevel: 1,
      id: 'scholars-privilege',
    },
    {
      icon: 'crown',
      name: `Encyclopedist's Grant`,
      description: 'Increases weekly rewards for maintaining a streak of activity in dailies.',
      maxLevel: 5,
      id: 'encyclopedists-grant',
    },
  ],
  [TalentsTypes.TalentsTiers.third]: [
    {
      icon: 'crown',
      name: 'Cognitive Edge',
      description: 'Completely removes the time limit for thinking in expert-level quizzes.',
      maxLevel: 5,
      id: 'cognitive-edge',
    },
    {
      icon: 'crown',
      name: `Chronicle Overload`,
      description:
        'When you complete a quiz with a perfect score, all experience gained for it is increased by +20%.',
      maxLevel: 5,
      id: 'chronicle-overload',
    },
  ],
};
