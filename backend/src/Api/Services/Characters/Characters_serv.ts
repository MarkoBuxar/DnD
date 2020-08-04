import { components } from '../../../types';
import { Knex } from '../../../Knex';

export class CharactersService {
  public async getCharacters(
    userId: number,
  ): Promise<components['schemas']['Character'][]> {
    const data: components['schemas']['Character'][] = await Knex.i()(
      'characters',
    )
      .where({ user_id: userId })
      .select('*');
    return data;
  }
}
