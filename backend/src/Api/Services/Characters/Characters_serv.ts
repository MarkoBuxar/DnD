import { Knex } from '../../../Knex';
import {
  CharacterInfo,
  Character,
  CharacterStats,
  Language,
  GoldPouch,
  Proficiency,
} from '../../../types';
import { keys } from 'ts-transformer-keys';

export class CharactersService {
  public async getCharacters(userId: number): Promise<CharacterInfo[]> {
    const data: CharacterInfo[] = await Knex.i()('characters')
      .where({ user_id: userId })
      .select(keys<CharacterInfo>());
    return data;
  }

  public async getCharacter(characterId: number): Promise<Character> {
    const info: CharacterInfo = (
      await Knex.i()('characters')
        .where({ character_id: characterId })
        .select(keys<CharacterInfo>())
    )[0];

    const stats: CharacterStats = (
      await Knex.i()('stats').where({ character_id: characterId }).select('*')
    )[0];

    const languages: Language[] = await Knex.i()('languages')
      .where({ character_id: characterId })
      .leftJoin(
        'language_list',
        'languages.language_id',
        'language_list.language_id',
      )
      .select(keys<Language>());

    const gold: GoldPouch = (
      await Knex.i()('gold_pouches')
        .where({ character_id: characterId })
        .select(keys<GoldPouch>())
    )[0];

    const proficiencies: Proficiency[] = await Knex.i()('proficiencies')
      .where({ character_id: characterId })
      .leftJoin(
        'proficiency_list',
        'proficiencies.proficiency_id',
        'proficiency_list.proficiency_id',
      )
      .leftJoin(
        'proficiency_types',
        'proficiency_list.proficiency_type_id',
        'proficiency_types.proficiency_type_id',
      )
      .select(keys<Proficiency>());

    const data: Character = { info, stats, languages, proficiencies, gold };

    return data;
  }
}
