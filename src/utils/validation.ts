
import { Results } from "@/interfaces"
import { multyply } from "./calculate";
import * as consts from "@/utils/constant";

export function checkString(value: FormDataEntryValue | null) {
  if (value === null) {
    return null;
  }
  return value.toString();
}

export function checkValue(value: FormDataEntryValue | null) {
  if (value === null) {
    return null;
  }
  return +value;
}

export function checkBoolean(value: FormDataEntryValue | null) {
  return value !== null;
}

function isVariableEmpty(variable: object | null) {
  return variable === null;
}

export function isInvalidObject(obj: Record<string, any>) {
  if (isVariableEmpty(obj) || containsNull(obj)) {
    return true;
  }

  return false;
}

function containsNull(obj: Record<string, any>): boolean {
  for (const key in obj) {
    if (obj.hasOwnProperty(key) && obj[key] === null) {
      return true;
    }
  }
  return false;
}

export function checkEnoughXP(results: Results, heroTier: number) {
  const nextHeroLevel = results.heroLevel + 1;

  if (nextHeroLevel > 20 || nextHeroLevel < 2) {
    return true;
  }

  const xpNeeded = multyply(consts.HERO_BASE_LEVEL_XP[nextHeroLevel].points, heroTier);
  const xpGained = results.gainedXP;

  if (xpGained >= xpNeeded) {
    return false;
  }

  return true;
}

export function handleArrayDublicates(results: Results) {
  
  let levelsByRound: { [round: number]: number } = {};
  
  results.listOfLevelup.forEach(entry => {
    if (!levelsByRound[entry.round] || entry.heroLevel > levelsByRound[entry.round]) {
      levelsByRound[entry.round] = entry.heroLevel;
    }
  });

  results.listOfLevelup = results.listOfLevelup.filter(entry => {
    return entry.heroLevel === levelsByRound[entry.round];
  });

  return results;
}