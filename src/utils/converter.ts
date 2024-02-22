import { checkBoolean, checkString, checkValue } from "@/utils/validation";
import { DataOfUserDTO, DataOfUser } from "@/interfaces"

export function initialDataConverter(formData: FormData) {
  return {
    mapDifficulty: checkString(formData.get("mapDifficulty")),
    heroTier: checkValue(formData.get("heroTier")),
    startingRound: checkValue(formData.get("startingRound")),
    untilRound: checkValue(formData.get("untilRound")),
    playerAmount: checkValue(formData.get("playerAmount")),
    startingLevel: checkValue(formData.get("startingLevel")),
    allMonkeyKnowledge: checkBoolean(formData.get("allMonkeyKnowledge")),
  }
}

export function convertDataOfUserToResults(dataOfUser: DataOfUser) {
  return { 
    heroLevel: dataOfUser.startingLevel,
    listOfLevelup: [],
    gainedXP: 0,
  };
}