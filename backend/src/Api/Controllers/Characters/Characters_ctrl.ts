export class CharacterCtrl {
  public static getCharacters(req, res, next) {
    res.send([{ ...req.params }]);
  }
}
