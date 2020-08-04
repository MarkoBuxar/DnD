import { CharacterCtrl } from './Controllers/Characters/Characters_ctrl';

const routes = {
  getCharacters: CharacterCtrl.getCharacters,
  getCharacter: CharacterCtrl.getCharacter,
};

export default routes;
