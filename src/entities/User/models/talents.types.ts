export namespace TalentsTypes {
  export enum TalentsTiers {
    first = '11 - 20',
    second = '21 - 30',
    third = '31 - 40',
  }
  export type Model = {
    icon: string;
    name: string;
    description: string;
    maxLevel: number;
    id: string;
  };
}
