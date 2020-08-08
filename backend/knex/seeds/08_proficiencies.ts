import * as Knex from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('proficiencies').del();
  await knex.raw('ALTER TABLE proficiencies AUTO_INCREMENT = 1');

  // Inserts seed entries
  await knex('proficiencies').insert([
    { character_id: 1, proficiency_id: 1 },
    { character_id: 1, proficiency_id: 2 },
    { character_id: 1, proficiency_id: 3 },
  ]);
}
