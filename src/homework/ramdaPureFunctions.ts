import {
  compose,
  prop, last, sortBy,
  toPairs, map, join, replace,
  split, fromPairs
} from "ramda";

// Задание 1
export type Team = { name: string; score: number };

const getName = prop('name');
const getScore = prop('score')
const sortByScore = sortBy(getScore);

export const getTopName = compose<
  Team[],
  Team[],
  Team,
  string
>(
  getName, 
  last,
  sortByScore
);

// Задание 2
export type QsObj = Record<string, string | number | boolean | object>;

 export const createQs = compose<
  QsObj,
  any[],
  string[],
  string,
  string
>(
  replace(/^/, '?'),
  join('&'),
  map(pair => `${pair[0]}=${pair[1]}`),
  toPairs
);

// Задание 3
const createPair = (str: string) : string[] => (
  str.split('=')
)

export const parseQs = compose<
  string,
  string,
  string[],
  any[],
  object
>(
  fromPairs,
  map(createPair),
  split('&'),
  replace(/^\?/, '')
);
