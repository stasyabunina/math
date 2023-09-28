import Magician from './magician';
import Daemon from './daemon';

const magician = new Magician('Merlin', 3);
console.log(magician);

const daemon = new Daemon('John', 5);
console.log(daemon.attack);
