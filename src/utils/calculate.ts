import { DataOfUserDTO, DataOfUser, Results } from "@/interfaces"
import { isInvalidObject, checkEnoughXP, handleArrayDublicates} from "@/utils/validation"
import * as consts from "@/utils/constant";
import { initialDataConverter, convertDataOfUserToResults } from "@/utils/converter";

export function handleBeginCalculation(formData: FormData) {
  const heroInformationDTO: DataOfUserDTO = initialDataConverter(formData);

  if (isInvalidObject(heroInformationDTO)) {
    return consts.ERROR_MISSING_VARIABLE;
  }
  
  const heroInformation = heroInformationDTO as DataOfUser;
  return loopOverRounds(heroInformation);
}

function loopOverRounds(heroInformation: DataOfUser) {
  const results: Results = convertDataOfUserToResults(heroInformation)

  for (let round = heroInformation.startingRound; round <= heroInformation.untilRound; round++) {
    if (results.heroLevel === consts.MAX_HERO_LEVEL) {
      break;
    }

    results.gainedXP = results.gainedXP + handleXpCalculation(round, heroInformation);

    if (checkEnoughXP(results, heroInformation.heroTier)) {
      continue;
    }

    calculateNewLevel(results, heroInformation);
    addHistory(results, round, heroInformation.startingRound);
  }

  return handleArrayDublicates(results);
}

function calculateNewLevel(results: Results, hero: DataOfUser) {
  const nextHeroLevel = results.heroLevel + 1;
  const heroMultiply = hero.heroTier;
  const basePointsNeeded = consts.HERO_BASE_LEVEL_XP[nextHeroLevel].points;

  const xpNeeded = multyply(basePointsNeeded, heroMultiply);
  results.gainedXP = results.gainedXP - xpNeeded;
  results.heroLevel = nextHeroLevel;   

  if (!checkEnoughXP(results, heroMultiply)) {
    calculateNewLevel(results, hero);
  }
}

function addHistory(results: Results, round: number, startingRound: number) {
  const newLevel = { heroLevel: results.heroLevel, round: round }

  if (startingRound === round) {
    newLevel.round = round + 1;
  }

  results.listOfLevelup.push(newLevel);
}

function handleXpCalculation(round: number, heroInformation: DataOfUser) {
  let tempGainedXP = handleLevelPathWithDifficultyFactor(round, heroInformation.mapDifficulty);
  tempGainedXP = divideBy(tempGainedXP, heroInformation.playerAmount);
  return applyMonkeyKnoledge(tempGainedXP, heroInformation.allMonkeyKnowledge)
}

function handleLevelPathWithDifficultyFactor(round: number, multyplyBy: string) {
  const multiplyer = consts.MAP_DIFFICULTY[multyplyBy];
  const baseXpForLevel = handleLevelPath(round);
  return multyply(baseXpForLevel, multiplyer);
}

function applyMonkeyKnoledge(gainedXp: number, apply: boolean) {
  if (!apply) {
    return gainedXp;
  }

  return multyply(gainedXp, consts.MONKEY_KNOLEDGE);
}


function divideBy(number: number, number2: number) {
  return Math.floor(number / number2)
}

export function multyply(number: number, number2: number) {
  return Math.floor(number * number2)
}

function handleLevelPath(level: number) {
  if (level <= consts.LEVEL_20) {
    return until20(level);
  } else if(level <= consts.LEVEL_50) {
    return until50(level);
  }
  
  return untilMax(level);
}

function until20(level: number) {
  const baseXP = 20; 
  const xpPerLevel = 20;

  return baseXP + (xpPerLevel * level);
}

function until50(level: number) {
  const extractForAccuracy = 380;
  const xpPerLevel = 40;

  return (xpPerLevel * level) - extractForAccuracy;
}

function untilMax(level: number) {
  const extractForAccuracy = 2880;
  const xpPerLevel = 90;

  return (xpPerLevel * level) - extractForAccuracy;
}