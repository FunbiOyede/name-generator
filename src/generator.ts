import { Nouns, Adjectives } from './data';

/**
 * @description generates a random string by concantenating adjectives and nouns
 */
const generate = (): string => {
  const randomeAdjective = Adjectives[Math.floor(Math.random() * Adjectives.length)];
  const randomNoun = Nouns[Math.floor(Math.random() * Nouns.length)];
  const randomName = randomeAdjective + ' ' + randomNoun;
  return randomName;
};

export default generate;
