import Character from './character';

export default class Daemon extends Character {
  constructor(name, distance, type = 'Daemon') {
    super(name, distance, type);
    this.attack = 10;
    this.defence = 40;
  }
}
