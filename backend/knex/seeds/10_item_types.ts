import * as Knex from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('item_types').del();
  await knex.raw('ALTER TABLE item_types AUTO_INCREMENT = 1');

  // Inserts seed entries
  await knex('item_types').insert([
    { item_type: 'Armor' },
    { item_type: 'Weapon' },
    { item_type: 'Item' },
    { item_type: 'Ammunition' },
  ]);
}
