import { CharacterGender } from "#app/enums/character-gender";
import { BattleStyle } from "#app/enums/battle-style";
import { GameManagerHelper } from "./gameManagerHelper";
import { ExpGainsSpeed } from "#app/enums/exp-gains-speed";

/**
 * Helper to handle settings for tests
 */
export class SettingsHelper extends GameManagerHelper {
  private _battleStyle: BattleStyle = BattleStyle.SET;

  get battleStyle(): BattleStyle {
    return this._battleStyle;
  }

  /**
   * Change the battle style to Switch or Set mode (tests default to {@linkcode BattleStyle.SET})
   * @param mode {@linkcode BattleStyle.SWITCH} or {@linkcode BattleStyle.SET}
   */
  set battleStyle(mode: BattleStyle.SWITCH | BattleStyle.SET) {
    this._battleStyle = mode;
  }

  /**
   * Disable/Enable type hints settings
   * @param enable true to enabled, false to disabled
   */
  typeHints(enable: boolean): void {
    this.game.scene.typeHints = enable;
    this.log(`Type Hints ${enable ? "enabled" : "disabled"}` );
  }

  /**
   * Change the player gender
   * @param gender the {@linkcode CharacterGender} to set
   */
  playerGender(gender: CharacterGender) {
    this.game.scene.gameData.gender = gender;
    this.log(`Player Gender set to: ${CharacterGender[gender]} (=${gender})` );
  }

  /**
   * Change the rival gender
   * @param gender the {@linkcode CharacterGender} to set
   */
  rivalGender(gender: CharacterGender) {
    this.game.scene.gameData.rivalGender = gender;
    this.log(`Rival Gender set to: ${CharacterGender[gender]} (=${gender})` );
  }


  /**
   * Change the exp gains speed
   * @param speed the {@linkcode ExpGainsSpeed} to set
   */
  expGainsSpeed(speed: ExpGainsSpeed) {
    this.game.scene.expGainsSpeed = speed;
    this.log(`Exp Gains Speed set to: ${ExpGainsSpeed[speed]} (=${speed})` );
  }

  private log(...params: any[]) {
    console.log("Settings:", ...params);
  }
}
