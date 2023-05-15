export enum AwardEnum {
  NIGHT_OWL = 'NIGHT_OWL',
  EARLY_BIRD = 'EARLY_BIRD',
}

export type Award = {
  id: AwardEnum;
  name: string;
  description: string;
};

export type AwardMap = {
  [key in AwardEnum]: Award;
};

export const awards: AwardMap = {
  NIGHT_OWL: {
    id: AwardEnum.NIGHT_OWL,
    name: 'Night Owl',
    description: 'Write 1000 words between 12-4 am',
  },
  EARLY_BIRD: {
    id: AwardEnum.EARLY_BIRD,
    name: 'Early Bird',
    description: 'Write 1000 words between 4-6 am',
  },
};
