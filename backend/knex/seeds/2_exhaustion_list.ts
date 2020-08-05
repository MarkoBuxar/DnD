import * as Knex from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('exhaustion_list').del();
  await knex.raw('ALTER TABLE exhaustion_list AUTO_INCREMENT = 1');

  // Inserts seed entries
  await knex('exhaustion_list').insert([
    { effect: 'Disadvantage on ability checks' },
    { effect: 'Speed halved' },
    { effect: 'Disadvantage on attacks and saves' },
    { effect: 'Max HP halved' },
    { effect: 'Speed reduced to 0' },
    { effect: 'Death' },
  ]);
}
