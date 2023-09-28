export default class Character {
  constructor(name, distance, type) {
    this.name = name;
    this.distance = distance;
    this.type = type;
    this.stoned = false;
  }

  set stoned(value) {
    this.isStoned = value;
  }

  get stoned() {
    return this.isStoned;
  }

  set attack(value) {
    this.attacked = value;
  }

  get attack() {
    const attack = this.attacked * (1 - (this.distance - 1) / 10);
    if (this.isStoned) {
      return attack - Math.log2(this.distance) * 5;
    }
    return attack;
  }
}
