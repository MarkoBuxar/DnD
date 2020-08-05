import * as Knex from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('stats').del();
  await knex.raw('ALTER TABLE stats AUTO_INCREMENT = 1');

  // Inserts seed entries
  await knex('stats').insert([
    {
      character_id: 1,
      walking_speed: 40,
      strength: 10,
      dexterity: 15,
      constitution: 10,
      intelligence: 9,
      wisdom: 13,
      charisma: 15,
      max_hp: 20,
      curr_hp: 20,
      d10: 1,
    },
    {
      character_id: 2,
      walking_speed: 40,
      strength: 10,
      dexterity: 15,
      constitution: 10,
      intelligence: 9,
      wisdom: 13,
      charisma: 15,
      max_hp: 20,
      curr_hp: 20,
      d12: 1,
    },
    {
      character_id: 3,
      walking_speed: 25,
      strength: 10,
      dexterity: 15,
      constitution: 10,
      intelligence: 9,
      wisdom: 13,
      charisma: 15,
      max_hp: 20,
      curr_hp: 20,
      d8: 1,
    },
  ]);
}
