import { S } from "ts-toolbelt";

export type OriginalTeam = {
  size: number;
  name: string;
  league: string;
};

export type ExpectedTeam = {
  name: string;
  league: string;
  roster: number;
};

export const originalTeamToExpectedTeam = (
  originalTeam: OriginalTeam
): ExpectedTeam => ({
  league: originalTeam.league,
  name: "New York Badgers",
  roster: originalTeam.size + 10
});

// Задание 2
export type SomeArray = Array<number | string>;

export const originalArrayToExpectedArray = (originalArray: SomeArray): SomeArray => {
  const copyOriginal = [].concat(originalArray)
  return (["two"] as SomeArray).concat(copyOriginal.slice(-2), 5);
};

// Задание 3

export type Team = {
  name: string;
  captain: {
    name: string;
    age: number;
  };
};

export const originalTeamToExpectedTeam2 = (originalTeam: Team): Team => {
  const copyOriginal = {...originalTeam};

  copyOriginal.captain.age = 28;

  return copyOriginal;
} 