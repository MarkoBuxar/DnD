import * as Knex from 'knex';

export async function seed(knex: Knex): Promise<void> {
  await knex('gold_pouches').del();
  await knex('languages').del();
  await knex('stats').del();
  await knex('characters').del();
  await knex.raw('ALTER TABLE characters AUTO_INCREMENT = 1');

  // Inserts seed entries
  await knex('characters').insert([
    {
      character_name: 'lorem ipsum',
      age: 36,
      gender: 'male',
      race: 'elf',
      class: 'ranger',
      size: 'medium',
      height: `5'3`,
      weight: 135,
      skin: 'green',
      eye_colour: 'brown',
      handedness: 'Left',
      physical_desc:
        'Quisque ipsum fames tempus auctor proin quam senectus rhoncus natoque facilisi litora id dictumst neque mus congue justo scelerisque vel',
    },
    {
      character_name: 'Mauris nascetur',
      age: 24,
      gender: 'female',
      race: 'Tiefling',
      class: 'barbarian',
      size: 'large',
      height: `8'2`,
      weight: 300,
      skin: 'pale',
      eye_colour: 'blue',
      handedness: 'right',
      physical_desc:
        'Quisque ipsum senectus rhoncus natoque facilisi litora id dictumst neque mus congue justo scelerisque vel',
    },
  ]);
}
