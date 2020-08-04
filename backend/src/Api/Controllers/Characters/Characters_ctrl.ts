import { CharactersService } from '../../Services/Characters/Characters_serv';
import { CharacterInfo, Character } from '../../../types';

export class CharacterCtrl {
  public static async getCharacters(req, res, next): Promise<void> {
    const characterService = new CharactersService();
    const data: CharacterInfo[] = await characterService.getCharacters(
      req.params.user_id,
    );

    res.send(data);
  }

  public static async getCharacter(req, res, next) {
    try {
      const characterService = new CharactersService();
      const data: Character = await characterService.getCharacter(
        req.params.character_id,
      );

      res.send(data);
    } catch (exp) {
      next(exp);
    }
  }
}
