import * as Knex from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('proficiency_types').del();
  await knex.raw('ALTER TABLE proficiency_types AUTO_INCREMENT = 1');

  // Inserts seed entries
  await knex('proficiency_types').insert([
    { proficiency_type_name: 'STAT' },
    { proficiency_type_name: 'SKILL' },
    { proficiency_type_name: 'WEAPON' },
    { proficiency_type_name: 'ARMOUR' },
    { proficiency_type_name: 'INSTRUMENT' },
    { proficiency_type_name: 'ITEM' },
  ]);
}
