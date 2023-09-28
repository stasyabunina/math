import Character from './character';

export default class Magician extends Character {
  constructor(name, distance, type = 'Magician') {
    super(name, distance, type);
    this.attack = 40;
    this.defence = 10;
  }
}
