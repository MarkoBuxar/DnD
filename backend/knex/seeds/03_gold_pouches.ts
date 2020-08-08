import * as Knex from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('gold_pouches').del();
  await knex.raw('ALTER TABLE gold_pouches AUTO_INCREMENT = 1');

  // Inserts seed entries
  await knex('gold_pouches').insert([
    { character_id: 1 },
    { character_id: 2 },
    { character_id: 3 },
  ]);
}
