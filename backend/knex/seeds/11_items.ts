import * as Knex from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('items').del();
  await knex.raw('ALTER TABLE items AUTO_INCREMENT = 1');

  // Inserts seed entries
  await knex('items').insert([
    { character_id: 1, item_type_id: '1', quantity: 1, weight: 12 },
    { character_id: 1, item_type_id: '2', quantity: 2, weight: 20 },
    { character_id: 1, item_type_id: '3', quantity: 99, weight: 10 },
  ]);
}
