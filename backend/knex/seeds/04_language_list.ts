import * as Knex from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('languages').del();
  await knex.raw('ALTER TABLE language_list AUTO_INCREMENT = 1');

  // Inserts seed entries
  await knex('language_list').insert([
    { language_name: 'common', language_type: 'standard', script: 'common' },
    {
      language_name: 'elvish',
      language_type: 'standard',
      language_description:
        'Enim ante auctor morbi suspendisse magna quam facilisis etiam sit',
      script: 'elvish',
    },
  ]);
}
