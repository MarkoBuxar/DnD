import * as Knex from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('languages').del();
  await knex.raw('ALTER TABLE languages AUTO_INCREMENT = 1');

  // Inserts seed entries
  await knex('languages').insert([
    { character_id: 1, language_id: 1 },
    { character_id: 1, language_id: 2 },
  ]);
}
