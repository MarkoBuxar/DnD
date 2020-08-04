import { CharactersService } from '../../Services/Characters/Characters_serv';
import { components } from '../../../types';

export class CharacterCtrl {
  public static async getCharacters(req, res, next): Promise<void> {
    const characterService = new CharactersService();
    const data: components['schemas']['Character'][] = await characterService.getCharacters(
      req.params.user_id,
    );

    res.send(data);
  }
}
