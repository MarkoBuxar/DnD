import * as Knex from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('proficiency_list').del();
  await knex.raw('ALTER TABLE proficiency_list AUTO_INCREMENT = 1');

  // Inserts seed entries
  await knex('proficiency_list').insert([
    { proficiency_name: 'Longbow', proficiency_type_id: 3 },
    { proficiency_name: 'Leather', proficiency_type_id: 4 },
    { proficiency_name: 'DEX', proficiency_type_id: 1, skill: 'dexterity' },
  ]);
}
