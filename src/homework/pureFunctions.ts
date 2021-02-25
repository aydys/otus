export type Team = { name: string; score: number };

export const getTopName = (teams: Team[]): string => {
  const copyTeams = [...teams]
  const sortedTeams = copyTeams.sort((a,b) => b.score - a.score)

  return sortedTeams[0].name;
};

// Задание 2
export type QsObj = Record<string, string | number | boolean | object>;

export const createQs = (qsObj: QsObj): string => {
  const pairs = Object.entries(qsObj);
  return pairs.reduce((accum, item, index, array) => {
    accum += `${item[0]}=${item[1]}`
    if (index !== (array.length - 1))
      accum += '&'
    return accum
  }, '?')
};

// Задание 3

export const parseQs = (qs: string): QsObj => {
  const rmFirstSign = qs.replace('?', '');

  const splited = rmFirstSign.split('&');

  return splited.reduce((accum, item) => {
    const pair = item.split('=');
    accum[pair[0]] = pair[1];
    return accum;
  }, {});
};