import { LevelDataRecord } from "@/interfaces";

export const ERROR_MISSING_VARIABLE = "Missing fields, try again";
export const LEVEL_20 = 20;
export const LEVEL_50 = 50;
export const MONKEY_KNOLEDGE = 1.2474;
export const MAX_HERO_LEVEL = 20;

export const HERO_BASE_LEVEL_XP: LevelDataRecord = {
  2: {"points": 180, "currentLevel": 1},
  3: {"points": 460, "currentLevel": 2},
  4: {"points": 1000, "currentLevel": 3},
  5: {"points": 1860, "currentLevel": 4},
  6: {"points": 3280, "currentLevel": 5},
  7: {"points": 5180, "currentLevel": 6},
  8: {"points": 8320, "currentLevel": 7},
  9: {"points": 9380, "currentLevel": 8},
  10: {"points": 13620, "currentLevel": 9},
  11: {"points": 16380, "currentLevel": 10},
  12: {"points": 14400, "currentLevel": 11},
  13: {"points": 16650, "currentLevel": 12},
  14: {"points": 14940, "currentLevel": 13},
  15: {"points": 16380, "currentLevel": 14},
  16: {"points": 17820, "currentLevel": 15},
  17: {"points": 19260, "currentLevel": 16},
  18: {"points": 20700, "currentLevel": 17},
  19: {"points": 16470, "currentLevel": 18},
  20: {"points": 17280, "currentLevel": 19}
}

export const MAP_DIFFICULTY: Record<string, number> = {
  "beginner" : 1.0,
  "intermediate": 1.1,
  "advanced": 1.2,
  "expert": 1.3,
}