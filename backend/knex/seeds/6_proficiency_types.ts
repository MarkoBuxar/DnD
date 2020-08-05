import * as Knex from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('proficiency_types').del();
  await knex.raw('ALTER TABLE proficiency_types AUTO_INCREMENT = 1');

  // Inserts seed entries
  await knex('proficiency_types').insert([
    { proficiency_type: 'Save' },
    { proficiency_type: 'Skill' },
    { proficiency_type: 'Weapons' },
    { proficiency_type: 'Armor' },
    { proficiency_type: 'Instruments' },
    { proficiency_type: `Tools` },
  ]);
}
