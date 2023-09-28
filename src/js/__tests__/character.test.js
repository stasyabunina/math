import Magician from '../magician';
import Daemon from '../daemon';

test('testing if magician is not stoned', () => {
  const magician = new Magician('Merlin', 3);
  magician.stoned = false;
  expect(magician.stoned).toBeFalsy();
});

test('testing if daemons attack is correct', () => {
  const daemon = new Daemon('John', 5);
  expect(daemon.attack).toBe(6);
});

test('testing if daemon is stoned', () => {
  const daemon = new Daemon('Scarlett', 2);
  daemon.stoned = true;
  expect(daemon.stoned).toBeTruthy();
});

test('testing if daemons attack is correct if stoned', () => {
  const daemon = new Daemon('Sky', 2);
  daemon.stoned = true;
  expect(daemon.attack).toBe(4);
});
