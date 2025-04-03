import {
	sum,
	scale,
	inTheBlack,
	inTheRed,
	currencies,
	totalOf,
	buy,
	add,
	effects,
	cost,
	allCosts
} from 'merchant.js'
import { GOLD, POWER } from "./currencies";

export const MagicSword = {
  type: "MagicSword",
  cost: () => {
    return Map({ [GOLD]: -5 });
  }
  effect: (state) => {
    return Map({ [POWER]: state.currentPowerLevel });
  }
};