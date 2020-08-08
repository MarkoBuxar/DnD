/* tslint:disable */
/* eslint-disable */

/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface Character {
  info: CharacterInfo;
  stats: CharacterStats;
  languages: Language[];
  proficiencies: Proficiency[];
  gold: GoldPouch;
  inventory: InventoryItem[];
}

export interface CharacterInfo {
  user_id: number;
  character_id: number;
  creation_date: string;
  character_name: string;
  lvl: number;
  xp: number;
  age: number;
  gender: string;
  race: string;
  class: string;
  size: string;
  height?: string;
  weight: number;
  eye_colour: string;
  handedness: string;
  physical_desc: string;
}

export interface CharacterStats {
  walking_speed: number;
  climbing_speed?: number;
  swimming_speed?: number;
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
  max_hp: number;
  temp_hp: number;
  curr_hp: number;
  exhaustion?: number;
  armor?: Armor;
  concentration?: Spell;
}

export interface Language {
  language_name: string;
  language_type: string;
  language_description?: string;
}

export interface GoldPouch {
  CP: number;
  SP: number;
  EP: number;
  GP: number;
  PP: number;
}

export interface Proficiency {
  proficiency_name: string;
  proficiency_type: "Save" | "Skill" | "Weapons" | "Armor" | "Instruments" | "Tools";
  skill?: "dexterity" | "strength" | "constitution" | "intelligence" | "wisdom" | "charisma" | "null";
}

export type InventoryItem = Armor | Weapon | Item | (Armor & Weapon & Item);

export type Armor = ItemSkeleton;

export type Weapon = ItemSkeleton;

export type Item = ItemSkeleton;

export interface ItemSkeleton {
  item_type: string;
  quantity: number;
  weight: number;
}

export type Spell = object;
