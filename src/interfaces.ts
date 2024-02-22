export interface ButtonProps {
  name: string;
  value: string | number;
  showValue: string;
  buttonAmber: boolean;
  children?: React.ReactNode;
  checked?: boolean;
  required?: boolean;
}

export interface InputProps {
  label: string,
  placeholder: string,
  min: string,
  max: string,
  inputName: string
  id: string
}

export interface DataOfUserDTO {
  mapDifficulty: string | null;
  heroTier: number | null;
  startingRound: number | null;
  untilRound: number | null;
  playerAmount: number | null;
  startingLevel: number | null;
  allMonkeyKnowledge: boolean; 
}

export interface DataOfUser {
  mapDifficulty: string;
  heroTier: number;
  startingRound: number;
  untilRound: number;
  playerAmount: number ;
  startingLevel: number;
  allMonkeyKnowledge: boolean; 
}

export interface Results {
  errorMessage?: string;
  heroLevel: number;
  gainedXP: number;
  listOfLevelup: {
    heroLevel: number, 
    round: number 
  }[]
}

export type LevelDataRecord = Record<number, LevelData>

interface LevelData {
  points: number;
  currentLevel: number;
}