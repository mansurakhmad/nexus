import { TalentsTypes } from '../models/talents.types';

export const bookmakerTalents: Record<TalentsTypes.TalentsTiers, TalentsTypes.Model[]> = {
  [TalentsTypes.TalentsTiers.first]: [
    {
      icon: 'crown',
      name: 'Smart Margin',
      description: `Reduces the platform's internal commission on bets, increasing net winnings at any odds by +2% / +4% / +6%.`,
      maxLevel: 3,
      id: 'smart-margin',
    },
    {
      id: 'booster-ticket',
      icon: 'crown',
      name: 'Booster Ticket',
      description:
        'Once a day, you can apply a “booster” to your bet, which increases the final odds by +5% / +10% / +15%.',
      maxLevel: 3,
    },
    {
      id: 'hedging-expert',
      icon: 'crown',
      name: 'Hedging Expert',
      description: 'Allows you to get back a 2% of the bet amount before the event starts.',
      maxLevel: 5,
    },
  ],
  [TalentsTypes.TalentsTiers.second]: [
    {
      icon: 'crown',
      name: 'Market Domination',
      description:
        'Increases the maximum limit of Credits that can be bet on a single event by +5%',
      maxLevel: 5,
      id: 'market-domination',
    },
    {
      icon: 'crown',
      name: `Syndicate Cut`,
      description:
        'You receive +1 / +2 / +3 Credits for every 10 bets made by members of your league/pool. Maximum limit: 150 Credits per day.',
      maxLevel: 3,
      id: 'syndicate-cut',
    },
  ],
  [TalentsTypes.TalentsTiers.third]: [
    {
      icon: 'crown',
      name: 'Insider',
      description:
        'Highlights on the chart (Strategic Asset Management) the direction in which the top 10 players are placing.',
      maxLevel: 5,
      id: 'insider',
    },
    {
      icon: 'crown',
      name: `Compounding Interest`,
      description:
        'If a player has a streak of 5+ successful predictions in a row, each subsequent win in this streak receives an additional bonus of +5% to the Credit payout.',
      maxLevel: 5,
      id: 'compounding-interest',
    },
  ],
};
